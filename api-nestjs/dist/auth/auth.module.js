"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const jwt_strategy_1 = require("./jwt.strategy");
const security_module_1 = require("./../shared/security.module");
const hash_security_1 = require("../shared/hash/hash.security");
const auth_controller_1 = require("./auth.controller");
const user_service_1 = require("./../user/user.service");
const user_module_1 = require("./../user/user.module");
const jwt_1 = require("@nestjs/jwt");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const passport_module_1 = require("@nestjs/passport/dist/passport.module");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../user/model/user.schema");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [
            user_module_1.UserModule,
            security_module_1.SecurityModule,
            mongoose_1.MongooseModule.forFeature([{ name: 'User', schema: user_schema_1.UserSchema }]),
            passport_module_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: 'toto',
                signOptions: {
                    expiresIn: 3600,
                },
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, user_service_1.UserService, hash_security_1.HashSecurity, jwt_strategy_1.JwtStrategy],
        exports: [jwt_strategy_1.JwtStrategy, passport_module_1.PassportModule]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map