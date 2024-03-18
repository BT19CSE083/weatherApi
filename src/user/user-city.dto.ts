import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UserCityDataDto {
  @ApiProperty({required: false})
  @IsOptional()
  name: string;
}
