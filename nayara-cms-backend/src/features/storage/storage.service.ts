import { Injectable, Logger, InternalServerErrorException } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

// Define a type for Multer file if not using global types
interface MulterFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  buffer: Buffer;
  // Add other fields if needed (e.g., destination, filename)
}


@Injectable()
export class StorageService {
  private readonly logger = new Logger(StorageService.name);
  // Use path.join for better cross-platform compatibility
  private storagePath = process.env.STORAGE_PATH || path.join(__dirname, '..', '..', '..', 'uploads'); 

  constructor() {
    this.ensureStorageDirectoryExists();
  }

  private async ensureStorageDirectoryExists(): Promise<void> {
    try {
      await fs.mkdir(this.storagePath, { recursive: true });
      this.logger.log(`Storage directory ensured at: ${this.storagePath}`);
    } catch (error) {
      this.logger.error(`Failed to create storage directory: ${this.storagePath}`, error.stack);
      // Depending on requirements, might throw or just log
    }
  }

  /**
   * Saves a file to the configured storage path.
   * Returns a unique identifier (e.g., filename) for the stored file.
   * In a real implementation, this would return a full URL.
   */
  async uploadFile(file: MulterFile): Promise<{ fileId: string; filePath: string }> {
    const uniqueFilename = `${uuidv4()}-${file.originalname}`;
    const filePath = path.join(this.storagePath, uniqueFilename);
    
    this.logger.log(`Attempting to upload file to: ${filePath}`);
    try {
      await fs.writeFile(filePath, file.buffer);
      this.logger.log(`File uploaded successfully: ${filePath}`);
      // For now, return the filename as ID and the local path
      // Later, this should return a publicly accessible URL
      return { fileId: uniqueFilename, filePath: filePath }; 
    } catch (error) {
      this.logger.error(`Failed to write file to ${filePath}`, error.stack);
      throw new InternalServerErrorException('Failed to upload file.');
    }
  }

  /**
   * Retrieves a file buffer using its identifier (filename).
   */
  async getFile(fileId: string): Promise<Buffer> {
    const filePath = path.join(this.storagePath, fileId);
    this.logger.log(`Attempting to read file from: ${filePath}`);
    try {
      const buffer = await fs.readFile(filePath);
      this.logger.log(`File read successfully: ${filePath}`);
      return buffer;
    } catch (error) {
      this.logger.error(`Failed to read file ${filePath}`, error.stack);
      if (error.code === 'ENOENT') {
          throw new InternalServerErrorException('File not found.'); // Or NotFoundException
      }
      throw new InternalServerErrorException('Failed to retrieve file.');
    }
  }

  /**
   * Deletes a file using its identifier (filename).
   */
  async deleteFile(fileId: string): Promise<void> {
    const filePath = path.join(this.storagePath, fileId);
    this.logger.log(`Attempting to delete file: ${filePath}`);
    try {
      await fs.unlink(filePath);
      this.logger.log(`File deleted successfully: ${filePath}`);
    } catch (error) {
      this.logger.error(`Failed to delete file ${filePath}`, error.stack);
       if (error.code === 'ENOENT') {
          this.logger.warn(`Attempted to delete non-existent file: ${filePath}`);
          return; // Don't throw if already deleted or never existed
      }
      throw new InternalServerErrorException('Failed to delete file.');
    }
  }
} 