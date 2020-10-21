"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const mongodb_memory_server_1 = require("mongodb-memory-server");
const config_1 = require("./config/config");
const common_1 = require("@nestjs/common");
const swagger_module_1 = require("@nestjs/swagger/dist/swagger-module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    if (process.env.NODE_ENV !== 'production') {
        const mongod = new mongodb_memory_server_1.MongoMemoryServer();
        config_1.Config.MONGO_URI = await mongod.getUri();
        ;
        common_1.Logger.log(`NODE_ENV => ${process.env.NODE_ENV}`);
        common_1.Logger.log('-----------------------------------------------------------------------');
        common_1.Logger.log('Mongo In Memory Server succesfully started', 'bootstrap');
        common_1.Logger.log(`uri : ${config_1.Config.MONGO_URI}`, 'bootstrap');
        common_1.Logger.log('-----------------------------------------------------------------------');
    }
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const options = new swagger_1.DocumentBuilder()
        .setTitle('OrganiCnav API')
        .setDescription('The API of Tempalte project application')
        .setVersion('1.0.0')
        .addBearerAuth()
        .build();
    const document = swagger_module_1.SwaggerModule.createDocument(app, options);
    swagger_module_1.SwaggerModule.setup('doc', app, document);
    await app.listen(config_1.Config.NODE_PORT, config_1.Config.NODE_HOST);
    common_1.Logger.log('-----------------------------------------------------------------------');
    common_1.Logger.log(`Nest application is listening on http://${config_1.Config.NODE_HOST}:${config_1.Config.NODE_PORT}`, 'bootstrap()');
    common_1.Logger.log('-----------------------------------------------------------------------');
}
bootstrap();
//# sourceMappingURL=main.js.map