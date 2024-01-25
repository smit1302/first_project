import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
@Controller()
export class AppController {
  @Get()
  getUsers() {
    return {
      name: 'Smit Choksi',
      email: 'smitjchoksi28@gmail.com',
    };
  }

  @Post()
  store(@Req() req: Request) {
    return req;
  }

  @Patch()
  update(@Req() req: Request) {
    return req;
  }

  @Get('/:userId')
  getUser(@Param() params: { userId: number }) {
    return params;
  }

  @Delete('/:userId')
  DeleteUser(@Param() params: { userId: number }) {
    return params;
  }
}
