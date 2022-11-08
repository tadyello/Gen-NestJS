import { IsNotEmpty, MaxLength } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Tema } from '../../tema/entities/tema.entity';


@Entity({ name: "tb_postagens" })
export class Postagem {

       @ApiProperty()
       @PrimaryGeneratedColumn()
       id: number;

       @IsNotEmpty()
       @MaxLength(100)
       @Column({ length: 100, nullable: false })
       @ApiProperty()
       titulo: string;

       @IsNotEmpty()
       @MaxLength(2000)
       @Column({ length: 2000, nullable: false })
       @ApiProperty()
       midia_url: string;

       @IsNotEmpty()
       @MaxLength(3000)
       @Column({ length: 3000, nullable: false })
       @ApiProperty()
       texto: string;

       @UpdateDateColumn()
       @ApiProperty()
       data: Date;

       @ApiProperty({ type: () => Usuario })
       @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
              onDelete: "CASCADE"
       })
       @JoinColumn({ name: "usuario_id" })
       usuario: Usuario[];

       @ApiProperty({ type: () => Tema })
       @ManyToOne(() => Tema, (tema) => tema.postagem, {
              onDelete: "CASCADE"
       })
       @JoinColumn({ name: "tema_id" })
       tema: Tema[];

}