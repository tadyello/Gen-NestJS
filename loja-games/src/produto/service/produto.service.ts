import { Injectable } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums";
import { HttpException } from "@nestjs/common/exceptions";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Produto } from "../entities/produto.entity";
import { ProdutoModule } from "../produto.module";


@Injectable()
export class ProdutoService {
    findByNome(nome: string): Promise<Produto[]> {
        throw new Error("Method not implemented.");
    }
    findByPlataforma(plataforma: string): Promise<Produto[]> {
        throw new Error("Method not implemented.");
    }

    constructor(
        @InjectRepository(Produto)
        private ProdutoRepository: Repository<Produto>
    ) { }

    async findAll(): Promise<Produto[]> {
        return await this.ProdutoRepository.find({
            relations: {
                categoria: true
            }
        })
    }


    async findById(id: number): Promise<Produto> {

        let produto = await this.ProdutoRepository.findOne({
            where: {
                id
            },
            relations: {
                categoria: true
            }
        })

        if (!produto)
            throw new HttpException('Produto não existe', HttpStatus.NOT_FOUND)

        return produto
    }

    async create(produto: Produto): Promise<Produto>{
        return await this.ProdutoRepository.save(produto)
    }

    async update(produto: Produto): Promise<Produto> {
        let buscarProduto = await this.findById(produto.id)

        if(!buscarProduto|| !produto.id)
            throw new HttpException('Produto Não Existe', HttpStatus.NOT_FOUND)

            return await this.ProdutoRepository.save(produto)
    }


    async delete(id: number): Promise<DeleteResult> {
        let buscarProduto = await this.findById(id)

        if(!buscarProduto)
            throw new HttpException('Produto não encontrado', HttpStatus.NOT_FOUND)

        return await this.ProdutoRepository.delete(id)
    }
    


}