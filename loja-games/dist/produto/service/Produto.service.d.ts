import { DeleteResult, Repository } from "typeorm";
import { Produto } from "../entities/produto.entity";
export declare class ProdutoService {
    private ProdutoRepository;
    findByNome(nome: string): Promise<Produto[]>;
    findByPlataforma(plataforma: string): Promise<Produto[]>;
    constructor(ProdutoRepository: Repository<Produto>);
    findAll(): Promise<Produto[]>;
    findById(id: number): Promise<Produto>;
    create(produto: Produto): Promise<Produto>;
    update(produto: Produto): Promise<Produto>;
    delete(id: number): Promise<DeleteResult>;
}
