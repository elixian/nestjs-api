import { RolesGuard } from './../auth/roles.guard';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { UserDocument } from './model/user.schema';
import { Body, Controller, Get, Logger, Post, Put, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import {Roles} from '../auth/roles.decorator';
import {UserRoles} from './user.roles'
@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(
        private userService : UserService
    ){}

    @Get('all')
    @Roles(UserRoles.admin)
    @UseGuards(AuthGuard('jwt'),RolesGuard)
    @ApiOperation({ summary: 'Get all users' })
    async getAllUsers():Promise<UserDocument[]>{
        return await this.userService.getListUsers();
    }

    // @Get()
    // test( @Res() res) {
    //     return res.sendFile('Florian-1f79.jpg', { root: 'files' });
    // }

    @Post('create')
    @Roles(UserRoles.admin)
    @UseGuards(AuthGuard('jwt'),RolesGuard)
    @ApiBearerAuth()
    async createUser(@Body() userDto: UserDto):Promise<UserDocument>{
        return await this.userService.createUser(userDto);
    }

    

    
    @Post('upload')
    @UseInterceptors(
      FileInterceptor('file', {
        storage: diskStorage({
          destination: './files',
          filename: (req, file, callback) => {
              Logger.debug('upload', file)
            const name = file.originalname.split('.')[0];
            const fileExtName = extname(file.originalname);
            const randomName = Array(4)
              .fill(null)
              .map(() => Math.round(Math.random() * 16).toString(16))
              .join('');
            callback(null, `${name}-${randomName}${fileExtName}`);
          },
        }),
        fileFilter: (req, file, callback) => {
            if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
              return callback(new Error('Only image files are allowed!'), false);
            }
            callback(null, true);
          },
      }),
    )
    async uploadedFile(@UploadedFile() file) {
      const response = {
        originalname: file.originalname,
        filename: file.filename,
      };
      return response;
    }

  
}
