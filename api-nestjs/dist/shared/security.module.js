"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityModule = void 0;
const hash_security_1 = require("./hash/hash.security");
const common_1 = require("@nestjs/common");
let SecurityModule = class SecurityModule {
};
SecurityModule = __decorate([
    common_1.Module({
        imports: [],
        controllers: [],
        providers: [hash_security_1.HashSecurity],
        exports: [hash_security_1.HashSecurity]
    })
], SecurityModule);
exports.SecurityModule = SecurityModule;
//# sourceMappingURL=security.module.js.map