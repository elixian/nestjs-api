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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jwt_1 = require("@nestjs/jwt");
const hash_security_1 = require("./../shared/hash/hash.security");
const user_service_1 = require("./../user/user.service");
const common_1 = require("@nestjs/common");
let AuthService = class AuthService {
    constructor(jwtService, userService) {
        this.jwtService = jwtService;
        this.userService = userService;
    }
    async signUp(credentialsDto) {
        const userDto = Object.assign({}, credentialsDto);
        try {
            await this.userService.createUser(userDto);
            return this.signIn(credentialsDto);
        }
        catch (error) {
            common_1.Logger.error(`Failed to signUp for user : ${JSON.stringify(credentialsDto.username)}`, error.stack, 'AuthService');
            throw new common_1.UnauthorizedException();
        }
    }
    async signIn(credentialsDto) {
        const { password, username } = credentialsDto;
        common_1.Logger.log(`credential : ${JSON.stringify(credentialsDto)}`, 'AuthService signIn');
        try {
            const user = await this.userService.getUserByName(credentialsDto.username);
            const isMatch = await hash_security_1.HashSecurity.validatePassword(password, user.password);
            if (isMatch) {
                common_1.Logger.log(`isMatch : ${JSON.stringify(credentialsDto)}`, 'AuthService signIn');
                const payload = { username, role: user.role };
                common_1.Logger.log(payload, 'payload ');
                const accessToken = await this.jwtService.sign(payload);
                return { username, accessToken, role: user.role };
            }
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        user_service_1.UserService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map