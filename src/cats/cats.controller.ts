import { Controller, Get, HttpCode, Post, Body, Param, HttpException, HttpStatus, ForbiddenException, UseFilters, UseGuards, ReflectMetadata } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';

@Controller('cats')
@UseGuards(RolesGuard)
export class CatsController {
  constructor(private readonly catsService: CatsService) { }

  @Post()
  @Roles('admin')
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
    // throw new ForbiddenException();
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id) {
    // logic
    return 'Your id is an integer';
  }
}
