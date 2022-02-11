# Microsserviço para autenticação de usuários

Este projeto foi desenvolvido durante o módulo de NodeJS do bootcamp **Banco Inter**, uma parceria entre [**Digital Innovation One**](https://www.dio.me/) e [**Banco Inter**](https://www.bancointer.com.br/)

O projeto consiste em um micro serviço de autenticação de usuários utilizando token.

## Objetivos

- Configurar a aplicação utilizando o typescript
- Configurar um banco de dados SQL - Postgre
- Definir rotas utilizando o padrão REST
- Implementar autenticação Basic
- Implementar autenticação Bearer
  
## Rotas

### **Usuários**
```
GET /users

GET /users/:uuid

POST /users

PUT /users/:uuid

DELETE /users/:uuid
```

### **Autenticação**
```
POST /token

POST /token/validate
```