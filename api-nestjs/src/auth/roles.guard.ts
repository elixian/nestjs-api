import { Injectable, CanActivate, ExecutionContext, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector:Reflector){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // const request = context.switchToHttp().getRequest();
    // Logger.log(request,'request : canActivate()');
    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    Logger.debug(roles, 'canActivate()');
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    
    const user = request.user;

    Logger.debug(user, 'canActivate() => request');
    const hasRole = () => roles.some(role => role === user.role);
 
   
      return user && user.role && hasRole()
    
  }
}