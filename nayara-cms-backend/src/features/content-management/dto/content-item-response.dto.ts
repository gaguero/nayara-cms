import { ApiProperty } from '@nestjs/swagger';

export class ContentItemResponseDto {
  @ApiProperty({ example: 'uuid-string-here' })
  id: string;

  @ApiProperty({ example: 'My Awesome Blog Post' })
  title: string;

  @ApiProperty({ example: 'This is the body of the blog post...' })
  body: string;

  @ApiProperty({ example: 'article' })
  contentType: string;

  @ApiProperty({ example: 'https://example.com/image.jpg', nullable: true })
  mediaUrl?: string | null;

  @ApiProperty({ example: 'published' })
  status: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ example: 'uuid-string-for-campaign' })
  campaignId: string;
} 