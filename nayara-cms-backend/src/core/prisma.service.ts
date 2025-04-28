import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    // Note: this.$connect() is automatically called by PrismaClient
    await this.$connect();
  }

  async onModuleDestroy() {
    // Note: this.$disconnect() is automatically called by PrismaClient
    await this.$disconnect();
  }
} 