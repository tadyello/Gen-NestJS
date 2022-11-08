import { Categoria } from "src/categoria/entities/categoria.entity";
export declare class Produto {
    id: number;
    nome: string;
    preco: number;
    publicadora: string;
    plataforma: string;
    categoria: Categoria;
}
