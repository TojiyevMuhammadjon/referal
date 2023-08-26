import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CompanyModule } from './company/company.module';
import { OrdersModule } from './orders/orders.module';
import { PromosModule } from './promos/promos.module';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    CompanyModule,
    OrdersModule,
    PromosModule,
    ProductsModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/vayNer'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
