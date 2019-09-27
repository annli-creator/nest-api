import { Controller, Get, Post, Body, Query, Delete } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCat } from './class/create-cat.class';

// tslint:disable-next-line:no-console
const l = console.log;
@Controller('cats')
export class CatsController {
  constructor(
    private readonly catsServer: CatsService,
  ) {}
  @Post()
  create(@Body() cat: CreateCat) {
     this.catsServer.create(cat);
  }

  @Get()
  findAll() {
    return this.catsServer.findAll();
  }

  @Get('find-cat')
  findCat(@Query('catName') catName) {
    return this.catsServer.findCat(catName);
  }

  @Post('update-cat-name')
  updateCatName(@Body() body) {
    this.catsServer.updateCatName(body);
  }

  @Delete('remove-cat')
  removeCat(@Body('catName') catName) {
    this.catsServer.removeCat(catName);
  }
}
