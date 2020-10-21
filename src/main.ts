import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { Config } from './config/config';
import { Logger } from '@nestjs/common';

import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module';
import { DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  if (process.env.NODE_ENV !== 'production') {
    const mongod = new MongoMemoryServer();
    Config.MONGO_URI = await mongod.getUri();;
    Logger.log(`NODE_ENV => ${process.env.NODE_ENV}`)
    Logger.log('-----------------------------------------------------------------------');
    Logger.log('Mongo In Memory Server succesfully started', 'bootstrap()');
    Logger.log(`uri : ${Config.MONGO_URI}`, 'bootstrap()');
    Logger.log('-----------------------------------------------------------------------');
    
  
  }
  const app = await NestFactory.create(AppModule);
  

    // setup swagger
    const options = new DocumentBuilder()
      .setTitle('OrganiCnav API')
      .setDescription('The API of Tempalte project application')
      .setVersion('1.0.0')
      .setBasePath('/api')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('doc', app, document);

    await app.listen(3000);
}
bootstrap();
