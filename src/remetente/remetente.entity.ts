import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Produto } from "src/produto/produto.entity";

@Entity("remetente")
export class Remetente {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'Email', type: 'varchar', length: '60' })
    email: string;

    @ManyToOne(type => Produto, produto => produto)
    produto: Produto;

}