"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const security_module_1 = require("./../shared/security.module");
const user_service_1 = require("./user.service");
const user_controller_1 = require("./user.controller");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("./model/user.schema");
const hash_security_1 = require("../shared/hash/hash.security");
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        imports: [
            security_module_1.SecurityModule,
            mongoose_1.MongooseModule.forFeatureAsync([
                {
                    name: user_schema_1.User.name,
                    useFactory: async () => {
                        const schema = user_schema_1.UserSchema;
                        schema.pre('save', async function (next) {
                            try {
                                if (!this.createdAt) {
                                    this.createdAt = new Date();
                                }
                                if (this.isModified('password')) {
                                    const hashedPassword = await hash_security_1.HashSecurity.genHashPassword(this.password);
                                    this.password = hashedPassword;
                                }
                                next();
                            }
                            catch (error) {
                                next(error);
                            }
                        });
                        return schema;
                    },
                }
            ])
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map