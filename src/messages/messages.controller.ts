import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { log } from 'console';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 's';
  }

  @Post()
  createMessages(@Body() body: any) {
    log(body);
    return body;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return id;
  }
}
