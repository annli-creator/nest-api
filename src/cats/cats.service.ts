import {
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import {
  Model,
} from 'mongoose';
import {
  InjectModel,
} from '@nestjs/mongoose';
import {
  Cat,
} from './interfaces/cat.interface';
import {
  CreateCat,
} from './class/create-cat.class';

// tslint:disable-next-line:no-console
const l = console.log;
@Injectable()
export class CatsService {
  constructor(
    @InjectModel('test') private readonly catModel: Model < Cat >,
  ) {}

  async create(cat: CreateCat): Promise < Cat > {
    // const createdCat = new this.catModel(cat)
    // return await createdCat.save()
    return this.catModel.insertMany(cat);
  }

  async findAll(): Promise < Cat[] > {
    return await this.catModel.find().exec();
  }

  async findCat(name: string): Promise < Cat[] > {
    if (!name) {
      throw new HttpException('请求参数不正确.', HttpStatus.FORBIDDEN);
    }
    const resCat = this.catModel.find({
      name,
    });
    return resCat;
  }

  async updateCatName({name, newName}) {
    if (!name || !newName) {
      throw new HttpException('请求参数不正确.', HttpStatus.FORBIDDEN);
    }

    const where = {
        name,
    };
    const update = {
        $set: {
            name: newName,
        },
    };
    return await this.catModel.updateOne(where, update);
  }

  async removeCat(catName) {
    l(catName);
    if (!catName) {
      throw new HttpException('请求参数不正确.', HttpStatus.FORBIDDEN);
    }
    return await this.catModel.deleteOne({name: catName});
  }
}
