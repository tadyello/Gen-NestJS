import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";


@Entity({ name: "tb_temas"})
export class Tema{

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @IsNotEmpty()
    @MaxLength(100)
    @Column({ length: 100, nullable: false})
    @ApiProperty()
    tema: string;

    @IsNotEmpty() 
    @MaxLength(100)
    @Column({ length: 100, nullable: false})
    @ApiProperty()
    hashtag: string;

    @ApiProperty({type: () => Postagem})
    @OneToMany(() => Postagem, (postagem) => postagem.tema)
    postagem: Postagem[]
 
} 