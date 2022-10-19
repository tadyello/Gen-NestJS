import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Produto } from "src/produto/entities/produto.entity";
@Entity({name: "tb_categorias"})
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @MaxLength(50)
    @Column({ length: 50, nullable: false})
    gênero: string;

    @OneToMany(() => Produto, (produto) => produto.categoria)
    produto: Produto[]
}