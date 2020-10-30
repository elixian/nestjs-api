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
exports.UserController = void 0;
const roles_guard_1 = require("./../auth/roles.guard");
const user_dto_1 = require("./dto/user.dto");
const user_service_1 = require("./user.service");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const roles_decorator_1 = require("../auth/roles.decorator");
const user_roles_1 = require("./user.roles");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getAllUsers() {
        return await this.userService.getListUsers();
    }
    test(res) {
        common_1.Logger.debug(res.sendFile('Florian-1f79.jpg', { root: 'files' }));
        return res.sendFile('Florian-1f79.jpg', { root: 'files' });
    }
    async createUser(userDto) {
        return await this.userService.createUser(userDto);
    }
    async uploadedFile(file) {
        const response = {
            originalname: file.originalname,
            filename: file.filename,
        };
        return response;
    }
};
__decorate([
    common_1.Get('all'),
    roles_decorator_1.Roles(user_roles_1.UserRoles.admin),
    common_1.UseGuards(passport_1.AuthGuard('jwt'), roles_guard_1.RolesGuard),
    swagger_1.ApiOperation({ summary: 'Get all users' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUsers", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "test", null);
__decorate([
    common_1.Post('create'),
    roles_decorator_1.Roles(user_roles_1.UserRoles.admin),
    common_1.UseGuards(passport_1.AuthGuard('jwt'), roles_guard_1.RolesGuard),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    common_1.Post('upload'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file', {
        storage: multer_1.diskStorage({
            destination: './files',
            filename: (req, file, callback) => {
                common_1.Logger.debug('upload', file);
                const name = file.originalname.split('.')[0];
                const fileExtName = path_1.extname(file.originalname);
                const randomName = Array(4)
                    .fill(null)
                    .map(() => Math.round(Math.random() * 16).toString(16))
                    .join('');
                callback(null, `${name}-${randomName}${fileExtName}`);
            },
        }),
        fileFilter: (req, file, callback) => {
            if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
                return callback(new Error('Only image files are allowed!'), false);
            }
            callback(null, true);
        },
    })),
    __param(0, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "uploadedFile", null);
UserController = __decorate([
    swagger_1.ApiTags('user'),
    common_1.Controller('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map