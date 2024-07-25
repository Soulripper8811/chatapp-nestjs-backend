import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'ep-bitter-wave-a54qr6bs.us-east-2.aws.neon.tech',
    //   database: 'chatapp',
    //   username: 'ecommerce_owner',
    //   password: 'm0u2UKbzjoYD',
    //   entities: [],
    //   synchronize: true,
    // }),
    // TypeOrmModule.forFeature([]),
  ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
