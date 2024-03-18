// city.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CityDataDto {
  @ApiProperty()
  name: string;
  // Add other properties if needed
}
