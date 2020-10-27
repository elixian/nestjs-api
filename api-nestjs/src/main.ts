import { NestFactory } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppModule } from './app.module';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { Config } from './config/config';
import { Logger } from '@nestjs/common';

import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module';
import { DocumentBuilder } from '@nestjs/swagger';
import { join } from 'path';

async function bootstrap() {

  
  // start in memory mongo server for development
  if (process.env.NODE_ENV !== 'production') {
    const mongod = new MongoMemoryServer();
    Config.MONGO_URI = await mongod.getUri();;
    Logger.log(`NODE_ENV => ${process.env.NODE_ENV}`)
    Logger.log('-----------------------------------------------------------------------');
    Logger.log('Mongo In Memory Server succesfully started', 'bootstrap');
    Logger.log(`uri : ${Config.MONGO_URI}`, 'bootstrap');
    Logger.log('-----------------------------------------------------------------------');
  }

  //Create nest app
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  // setup swagger
  const options = new DocumentBuilder()
    .setTitle('OrganiCnav API')
    .setDescription('The API of Tempalte project application')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('doc', app, document);

  // start app
  await app.listen(Config.NODE_PORT,Config.NODE_HOST);
  Logger.log('-----------------------------------------------------------------------');
  Logger.log(`Nest application is listening on http://${Config.NODE_HOST}:${Config.NODE_PORT}`, 'bootstrap()');
  Logger.log('-----------------------------------------------------------------------');
}
bootstrap();
