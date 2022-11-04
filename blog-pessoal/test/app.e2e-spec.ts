import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { async } from 'rxjs';
import { Usuario } from 'src/usuario/entities/usuario.entity';

describe('Teste módulo de usuario e Auth (e2e)', () => {

  let token: any;
  let usuarioId: any;
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'db_projetopessoal_test',
        entities: [Usuario],
        autoLoadEntities: true,
        synchronize: true,
        logging: false,
        dropSchema: true

      }),
    
    AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close()
  })

  it('01 - Deve Cadastrar Usuário',async () => {
    const resposta = await request(app.getHttpServer)

    .post('usuarios/cadastrar')
    .send({
      nome: 'Root',
      usuario: 'root@root.com',
      senha: 'rootsenha',
      foto: ''
    });
    expect(201)

    usuarioId = resposta.body.id
  });

})