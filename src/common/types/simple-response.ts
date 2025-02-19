import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SimpleResponse {
  @ApiProperty()
  @IsString()
  status: string;

  @ApiProperty()
  @IsString()
  message: string;
}