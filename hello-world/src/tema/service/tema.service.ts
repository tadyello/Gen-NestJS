import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Tema } from "../entities/tema.entity";

@Injectable()
export class TemaServiced{
    constructor(
        
        @InjectRepository(Tema)
        private temaRepository: Repository<Tema>
    ) {}
    async findAll(): Promise<Tema[]> {
        return await this.temaRepository.find({
            relations: {
                postagem: true
            }
        });
    }
    async findById(id: number): Promise<Tema> {
        let tema = await this.temaRepository.findOne({

            where: {
                id
            },
            relations: {
                postagem: true
            }
        })
        if (!tema)
            throw new HttpException('Tema não existe', HttpStatus.NOT_FOUND)

        return tema
    }
    async findByDescricao(descricao: string): Promise<Tema[]> {
        return await this.temaRepository.find({

            where: {
                descricao: ILike(`%${descricao}%`)
            },
            relations: {
                postagem: true
            }
        })

    }
    async create(Tema: Tema): Promise<Tema> {
        return await this.temaRepository.save(Tema)
    }

    async update(tema: Tema): Promise<Tema> {

        let buscarTema = await this.findById(tema.id)

        if (!buscarTema || !tema.id)
            throw new HttpException('Tema não existe', HttpStatus.NOT_FOUND)

        return await this.temaRepository.save(tema)

    }

    async Delete(id: number): Promise<DeleteResult> {

        let buscarTema = await this.findById(id)

        if (!buscarTema)
            throw new HttpException('Tema não encontrada', HttpStatus.NOT_FOUND)

        return await this.temaRepository.delete(id)
    }
}