"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUser = void 0;
const common_1 = require("@nestjs/common");
exports.GetUser = common_1.createParamDecorator((data, ctx) => {
    common_1.Logger.debug(`Data : ${data}`);
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});
//# sourceMappingURL=get-user.decorator.js.map