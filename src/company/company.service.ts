import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICompany } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel('Company') private readonly CompanyModel: Model<ICompany>,
  ) {}
  async create(createCompanyDto: CreateCompanyDto): Promise<ICompany> {
    const newCompany = new this.CompanyModel(createCompanyDto);
    return await newCompany.save();
  }

  async findAll(): Promise<ICompany[]> {
    return this.CompanyModel.find().exec();
  }

  async findOne(id: string): Promise<ICompany | null> {
    return this.CompanyModel.findById(id).exec();
  }

  async update(
    id: string,
    updateCompanyDto: UpdateCompanyDto,
  ): Promise<ICompany | null> {
    const company = await this.CompanyModel.findByIdAndUpdate(
      id,
      updateCompanyDto,
      { new: true },
    ).exec();
    return company;
  }

  async remove(id: string): Promise<ICompany | null> {
    return this.CompanyModel.findByIdAndDelete(id);
  }
}
