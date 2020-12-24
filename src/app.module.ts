import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AccountModule } from './account/account.module';
import { OrdersModule } from './orders/orders.module';
import { PositionsModule } from './positions/positions.module';
import { AssetsModule } from './assets/assets.module';

@Module({
  imports: [ConfigModule.forRoot({}), AccountModule, OrdersModule, PositionsModule, AssetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
