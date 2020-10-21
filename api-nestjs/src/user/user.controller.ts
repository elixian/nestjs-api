import { UserService } from './user.service';
import { UserDocument } from './model/user.schema';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('user')
export class UserController {
    constructor(
        private userService : UserService
    ){}

    @Get('all')
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: 'Get all users' })
    async getAllUsers():Promise<UserDocument[]>{
        return await this.userService.getListUsers();
    }
}
