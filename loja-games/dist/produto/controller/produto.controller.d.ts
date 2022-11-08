import { Produto } from "../entities/Produto.entity";
import { ProdutoService } from "../service/Produto.service";
export declare class ProdutoController {
    private readonly ProdutoService;
    constructor(ProdutoService: ProdutoService);
    findAll(): Promise<Produto[]>;
    findById(id: number): Promise<Produto>;
    findByNome(nome: string): Promise<Produto[]>;
    findByPlataforma(plataforma: string): Promise<Produto[]>;
    create(Produto: Produto): Promise<Produto>;
    update(Produto: Produto): Promise<Produto>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
