import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("produtos")

export class Produto {
  
  @PrimaryGeneratedColumn({type: 'int'})
  id: number;

  @Column({ name: 'Nome', type: 'varchar', length: 30 })
  name: string;

  @Column({ name: 'Descricao', type: 'varchar', length: 30 })
  description: string;

  @Column({ name: 'Preco', type: 'int' })
  price: number;

  @Column({ name: 'Preco_de_Oferta', type: 'int' })
  offerPrice: number;
}