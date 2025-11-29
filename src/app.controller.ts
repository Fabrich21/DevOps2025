import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHome(): string {
    return this.appService.getHome();
  }

  @Get('info')
  getInfo(): string {
    return this.appService.getInfo();
  }

  @Get('status')
  getStatus(): string {
    return this.appService.getStatus();
  }
}
