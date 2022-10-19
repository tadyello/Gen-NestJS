import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Categoria } from './categoria/entities/categoria.entity';
import { Produto } from './produto/entities/produto.entity';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
      type: 'mysql',
      host: 'localhost',
      port:3306,
      username: 'root',
      password: 'root',
      database: 'db_atividade_loja',
      entities: [Produto, Categoria],
      synchronize: true,      
    }),
    ProdutoModule,
    
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 