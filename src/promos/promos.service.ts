import { Injectable } from '@nestjs/common';
import { CreatePromoDto } from './dto/create-promo.dto';
import { UpdatePromoDto } from './dto/update-promo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPromo } from './entities/promo.entity';

@Injectable()
export class PromosService {
  constructor(
    @InjectModel('Promo') private readonly promoModel: Model<IPromo>,
  ) {}
  create(createPromoDto: CreatePromoDto) {
    return 'This action adds a new promo';
  }

  findAll() {
    return `This action returns all promos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} promo`;
  }

  update(id: number, updatePromoDto: UpdatePromoDto) {
    return `This action updates a #${id} promo`;
  }

  remove(id: number) {
    return `This action removes a #${id} promo`;
  }
}
