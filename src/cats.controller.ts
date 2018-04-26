import { Controller, Get, HttpCode, Post, Body, Param } from '@nestjs/common';
import { create } from 'domain';
import { CreateCatDto } from 'dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  // @HttpCode(204)
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    // TODO: Add some logic here
    console.log(createCatDto);
  }

  @Get(':id')
  async findAll(@Param() params): Promise<any[]> {
    console.log(params.id);
    return [];
  }
}
