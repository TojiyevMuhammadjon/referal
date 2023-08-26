import { PartialType } from '@nestjs/mapped-types';
import { CreatePromoDto } from './create-promo.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePromoDto extends PartialType(CreatePromoDto) {
  @IsString()
  @IsNotEmpty()
  promo: string;

  @IsString()
  @IsNotEmpty()
  companyId: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
