import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// remember to replace the <username> and <password> with your credentials
const DB_URI =
  'mongodb+srv://jimjam:Smallmac48@cluster0.ktxx5bo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.DB_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
