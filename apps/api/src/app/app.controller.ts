import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('games')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getGames() {
    return this.appService.getGames();
  }
 
  @Get('/:id')
  getGame(@Param('id') id:string) {
    return this.appService.getGame(id);
  }
}
