import { Module } from '@nestjs/common';
import { PromosService } from './promos.service';
import { PromosController } from './promos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { promo } from './entities/promo.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Promo', schema: promo }])],
  controllers: [PromosController],
  providers: [PromosService],
})
export class PromosModule {}
