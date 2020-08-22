import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("clientes")

export class Cliente {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'Nome', type: 'varchar', length: 50 })
  name: string;

  @Column({ name: 'CPF', type: 'varchar', length: 14 })
  cpf: string;

  @Column({ name: 'RG', type: 'varchar', length: 12 })
  rg: string;

  @Column({ name: 'Email', type: 'varchar', length: 60 })
  email: string;

  @Column({ name: 'Data_de_Nascimento', type: 'varchar', length: 10 })
  birth: string;

}