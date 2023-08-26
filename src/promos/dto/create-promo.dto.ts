import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePromoDto {
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
