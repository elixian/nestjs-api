import { User } from './../user/model/user.schema';

import { createParamDecorator, ExecutionContext, Logger } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext):User => {
      Logger.debug(`Data : ${data}`)
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);