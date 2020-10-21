"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashSecurity = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
class HashSecurity {
    static async genHashPassword(password) {
        common_1.Logger.debug(`IngenHashPaswword ${password}`);
        const salt = await bcrypt_1.genSalt(10);
        return await bcrypt_1.hash(password, salt);
    }
    static async validatePassword(password, hashed) {
        return await bcrypt_1.compare(password, hashed);
    }
}
exports.HashSecurity = HashSecurity;
//# sourceMappingURL=hash.security.js.map