"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const user_schema_1 = require("./../user/model/user.schema");
const credentials_dto_1 = require("./dto/credentials.dto");
const auth_service_1 = require("./auth.service");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const get_user_decorator_1 = require("./get-user.decorator");
const swagger_1 = require("@nestjs/swagger");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async signUp(credentialDto) {
        return await this.authService.signUp(credentialDto);
    }
    async signIn(credentialDto) {
        return await this.authService.signIn(credentialDto);
    }
    async test(user) {
        console.log('test', user);
    }
};
__decorate([
    common_1.Post('signup'),
    swagger_1.ApiResponse({ status: 200, description: 'Return JWT payload' }),
    swagger_1.ApiResponse({ status: 400, description: 'Bad Request (account already exists, validation failed, ...)' }),
    swagger_1.ApiOperation({ summary: 'Créer un utilisateur' }),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [credentials_dto_1.CredentialsDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    common_1.Get('signin'),
    swagger_1.ApiResponse({ status: 401, description: 'Forbidden.' }),
    swagger_1.ApiOperation({ summary: 'Authentification' }),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [credentials_dto_1.CredentialsDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signIn", null);
__decorate([
    common_1.Post('/test'),
    common_1.UseGuards(passport_1.AuthGuard()),
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    __param(0, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_schema_1.User]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "test", null);
AuthController = __decorate([
    swagger_1.ApiTags('auth'),
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map