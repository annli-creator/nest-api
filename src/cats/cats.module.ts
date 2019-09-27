import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './schemas/cat.schema';

@Module({
  imports: [
    MongooseModule.forFeature([ // Schema 定义数据库的结构
      { name: 'test', schema: CatSchema }, // name: 'test'  cats 表， Cat 必须和service时@InjectModel('Cat')的一样
    ]),
  ],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
