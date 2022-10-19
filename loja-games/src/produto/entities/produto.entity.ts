import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";

@Entity({name: "tb_produtos"})
export class Produto {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @MaxLength(50)
    @Column({ length: 50, nullable: false})
    nome: string;
    
    @IsNotEmpty()
    @MaxLength(10)
    @Column({type:"decimal",  precision: 10, scale: 2, nullable: false})
    preco: number;

    @IsNotEmpty()
    @MaxLength(50)
    @Column({ length: 50, nullable: false})
    publicadora: string;

    @IsNotEmpty()
    @MaxLength(50)
    @Column({ length: 50, nullable: false})
    plataforma: string;

    @ManyToOne(() => Categoria, (categoria) => categoria.produto)
    categoria: Categoria
    
}

