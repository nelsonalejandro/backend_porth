import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

 /*  @Get()
  getMessage(): string {
    return this.appService.getMessage();
  } */
  @Post("write")
  writeMessage(@Body() body): string {
    return this.appService.writeMessage(body);
  }
}
