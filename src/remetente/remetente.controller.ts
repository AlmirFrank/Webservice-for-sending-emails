import { Controller, Get } from '@nestjs/common';
import { RemetenteService } from './remetente.service';

@Controller('remetente')
export class RemetenteController {

  constructor(private readonly remetenteService: RemetenteService) {}

  @Get()
  async printMessage() {
    return await this.remetenteService.sendMail();
  }
  
}
