import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { company } from './entities/company.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Company', schema: company }])],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
