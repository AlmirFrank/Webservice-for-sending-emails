import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("ocorrencias")

export class Ocorrencia {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'Sucesso', type: 'varchar', length: 8 })
  sucesso: string;

  @Column({ name: 'Falha', type: 'varchar', length: 8 })
  falha: string;

}