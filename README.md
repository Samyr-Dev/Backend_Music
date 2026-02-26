# Music API - Backend de Gerenciamento de Músicas 🎵

[![License](https://img.shields.io/github/license/Samyr-Dev/Backend_Music)](https://github.com/Samyr-Dev/Backend_Music/blob/main/LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)

Esta é uma API REST desenvolvida em **Node.js** com **Express** e **Mongoose**, criada para gerenciar um acervo musical. O projeto foca em persistência de dados segura, validações estruturadas e tratamento de erros para integração com o Frontend.

---

## 🛠️ Implementações e Melhorias Técnicas

Neste desafio, apliquei as seguintes melhorias para garantir a integridade e segurança dos dados:

* **Validação de Unicidade (Conflict 409)**: Implementação de um **Índice Composto Único** no MongoDB. Isso impede que a combinação de `Cantor + Música` seja duplicada no banco de dados, retornando um erro amigável ao usuário.
* **Tratamento de Erros Robusto**: Criação de um middleware para capturar falhas de validação (`ValidationError`) e duplicidade (`MongoServerError 11000`), garantindo que a API responda com status HTTP corretos.
* **Segurança de Credenciais**: Configuração de variáveis de ambiente via `.env` para proteção da String de Conexão do MongoDB Atlas e outras chaves sensíveis.
* **Restrição por Enumeração**: O campo de gênero musical foi limitado a uma lista predefinida (`enum`), evitando a entrada de dados inconsistentes no banco.

---

## ⚙️ Instalação e Configuração

Para rodar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/Samyr-Dev/Backend_Music.git](https://github.com/Samyr-Dev/Backend_Music.git)
    cd Backend_Music
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    Crie um arquivo `.env` na raiz do projeto e adicione sua URI do MongoDB:
    ```env
    MONGO_URI=mongodb+srv://USUARIO:SENHA@cluster.mongodb.net/SEU_BANCO
    PORT=5000
    ```

4.  **Inicie o servidor:**
    ```bash
    npm start
    ```
    O servidor estará rodando em: `http://localhost:5000`

---

## ⚠️ Integração com Frontend

Esta API foi desenhada para servir ao projeto de interface em Angular 18.
🔗 **Repositório do Frontend:** [Clique aqui para acessar o Frontend](https://github.com/Samyr-Dev/List_Music)

---

## 🧑‍💻 Autor

**Samyr Silva Tertuliano Deusdará**
*Estudante de Engenharia de Software | Desenvolvedor Full Stack em formação*

* [LinkedIn](https://www.linkedin.com/in/samyrtertuliano)
* [GitHub](https://github.com/Samyr-Dev)
