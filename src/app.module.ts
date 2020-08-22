import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteController } from './cliente/cliente.controller';
import { ClienteService } from './cliente/cliente.service';
import { ProdutoController } from './produto/produto.controller';
import { ProdutoService } from './produto/produto.service';
import { ScheduleModule } from '@nestjs/schedule';
import { RemetenteController } from './remetente/remetente.controller';
import { RemetenteService } from './remetente/remetente.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './cliente/cliente.entity';
import { Produto } from './produto/produto.entity';
import { Remetente } from './remetente/remetente.entity';
import { OcorrenciaController } from './ocorrencia/ocorrencia.controller';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'emails',
      entities: [
        Cliente,
        Produto,
        Remetente,
      ],

      synchronize: true,
      logging: true,

    }),

    TypeOrmModule.forFeature([
      Cliente,
      Produto,
      Remetente,
    ])

  ],

  controllers: [AppController, ClienteController, ProdutoController, RemetenteController, OcorrenciaController],
  providers: [AppService, ClienteService, ProdutoService, RemetenteService],
})
export class AppModule {}
