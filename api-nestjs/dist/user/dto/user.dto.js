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
exports.UserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UserDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(4, { message: "Le nom doit avoir au moins 4 caractères" }),
    class_validator_1.MaxLength(20),
    swagger_1.ApiProperty({
        description: 'Le nom utilisateur',
        minimum: 4,
        required: true,
        maximum: 20,
    }),
    __metadata("design:type", String)
], UserDto.prototype, "username", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(4),
    class_validator_1.MaxLength(50),
    swagger_1.ApiProperty({
        description: 'Mot de passe utilisateur',
        minimum: 4,
        required: true,
        maximum: 50,
    }),
    __metadata("design:type", String)
], UserDto.prototype, "password", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty({
        description: 'Role utilisateur',
        minimum: 4,
        required: true,
        maximum: 50,
    }),
    __metadata("design:type", String)
], UserDto.prototype, "role", void 0);
exports.UserDto = UserDto;
//# sourceMappingURL=user.dto.js.map