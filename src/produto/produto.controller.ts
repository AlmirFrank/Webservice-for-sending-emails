import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from './produto.entity';

@Controller('produto')
export class ProdutoController {

  constructor(private readonly produto: ProdutoService) { }
  
  @Post()
  save(@Body() produto: Produto) {
    return this.produto.save(produto);  
  }
  
  @Get()
  findAll() {
    return this.produto.findAll();
  }

  @Get(":id")
  findById(@Param('id') id: number) {
    return this.produto.findById(id);
  } 

  @Delete(":id")
  remove(@Param() id: number) {
    return this.produto.delete(id);
  }
  
}
