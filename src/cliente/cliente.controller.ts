import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.entity';

@Controller('cliente')
export class ClienteController {

  constructor(private readonly cliente: ClienteService) { }
  
  @Post()
  save(@Body() cliente: Cliente) {
    return this.cliente.save(cliente);  
  }
  
  @Get()
  findAll() {
    return this.cliente.findAll();
  }

  @Get(":id")
  findById(@Param('id') id: number) {
    return this.cliente.findById(id);
  } 

  @Delete(":id")
  remove(@Param() id: number) {
    return this.cliente.delete(id);
  }
  
}
