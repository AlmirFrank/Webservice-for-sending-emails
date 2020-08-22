import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm/repository/Repository';
import { Produto } from './produto.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProdutoService {

  constructor(
    @InjectRepository(Produto)
    private readonly repository: Repository<Produto>) {
    }

    save(produto: Produto) {
      return this.repository.save(produto);
    }

    delete(id: number) {
      return this.repository.delete(id);
    }

    findAll() {
      return this.repository.find();
    }

    findById(id: number) {
      return this.repository.findOne(id);  
    }

}