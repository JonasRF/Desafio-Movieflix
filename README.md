# Desafio-Movieflix
***Projeto de catálogo de filmes filtrados por genero***

Sistema desenvolvido com a linguagem Java, utilizando o framework Spring Boot no backend e a biblioteca React no frontend.

```
O objetivo do projeto foi desenvolver uma aplicação web fullsatck; fazendo-se uso de processos como CRUD, testes automatizados TDD,
JUnit com e sem Spring Boot, 
testar repositories, services e resources, testes de integração, mockar dependências com Mockito e MockBean, realizar assertions,
validação de dados com Bean Validation, 
autenticação e autorização com OAuth2 e JWT, implementar um modelo conceitual complexo com ORM e seed de banco de dados. 
Criar autorizações customizadas: em nível de serviço, conteúdo customizado para o usuário logado, refresh token, pré-autorização de métodos.
Realizar consultas ao banco de dados com JPA e JPQL, problema das N+1 consultas, consultas nativas com SQL. 
Aplicando fundamentos de Docker, imagens e containers, Docker Hub, realizar build e implantação manual de um projeto Spring Boot na AWS,
CI/CD com Heroku, AWS e Github Actions.

```

![image](https://github.com/JonasRF/Desafio-Movieflix/assets/77034798/a65b9ce4-aa99-4b31-88aa-0398400e59e1)


Protótipos de tela
https://www.figma.com/file/qmduL2GXrMrqRLyFjFCk56/MovieFlix-web

O sistema MovieFlix consiste em um banco de filmes, os quais podem ser listados e avaliados pelos usuários. Usuários podem ser visitantes (VISITOR) e membros (MEMBER). Apenas usuários membros podem inserir avaliações no sistema.

Ao acessar o sistema, o usuário deve fazer seu login. Apenas usuários logados podem navegar nos filmes. Logo após fazer o login, o usuário vai para a listagem de filmes, que mostra os filmes de forma paginada, ordenados alfabeticamente por título. O usuário pode filtrar os filmes por gênero.

Ao selecionar um filme da listagem, é mostrada uma página de detalhes, onde é possível ver todas informações do filme, e também suas avaliações. Se o usuário for MEMBER, ele pode ainda registrar uma avaliação nessa tela.

Um usuário possui nome, email e senha, sendo que o email é seu nome de usuário. Cada filme possui um título, subtítulo, uma imagem, ano de lançamento, sinopse, e um gênero. Os usuários membros podem registrar avaliações para os filmes. Um mesmo usuário membro pode deixar mais de uma avaliação para o mesmo filme.

