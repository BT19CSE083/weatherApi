import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { PassportModule } from '@nestjs/passport';
import { ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger';
import { CityDataDto } from './city.dto';
@ApiTags('Admin') 
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('add-city')
  @ApiBody({ type: CityDataDto }) 
  @ApiResponse({ status: 201, description: 'City added successfully' }) 
  @ApiResponse({ status: 400, description: 'Bad request' }) 
  async addCity(@Body() cityData: any) {
    try {
      const result = await this.adminService.addCity(cityData);
      return { success: true, data: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
