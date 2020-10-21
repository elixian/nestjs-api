"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashSecurity = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
let HashSecurity = class HashSecurity {
    static async genHashPassword(password) {
        const salt = await bcrypt_1.genSalt(10);
        return await bcrypt_1.hash(password, salt);
    }
    static async validatePassword(password, hashed) {
        return await bcrypt_1.compare(password, hashed);
    }
};
HashSecurity = __decorate([
    common_1.Injectable()
], HashSecurity);
exports.HashSecurity = HashSecurity;
//# sourceMappingURL=hash.security.js.map