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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./model/user.schema");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async createUser(userDto) {
        const user = new this.userModel(userDto);
        common_1.Logger.debug(userDto, 'UserService');
        try {
            await user.save();
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.HttpException('Username already exist', common_1.HttpStatus.BAD_REQUEST);
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
        return user;
    }
    async getUserByName(username) {
        const user = await this.userModel.findOne({ username });
        if (!user) {
            throw new common_1.NotFoundException();
        }
        return user;
    }
    async getListUsers() {
        const user = await this.userModel.find();
        if (!user.length) {
            throw new common_1.NotFoundException();
        }
        return user;
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map