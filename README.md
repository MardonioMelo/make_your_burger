# 3_make_your_burger

Este projeto é um site para montagem de Burger, nele você monta seu Burger, visualiza os pedidos gerados, atualiza o status do pedido e cancela/exclui os pedidos.

Os dados das opções contidas no formulário estão no arquivo db/db.json, edite estes dados para adicionar mais opções para cada campo do fomulário, conforme sua preferencia.

## Project setup

### Execute este comando dentro do diretório da aplicação para instalar as dependências do projeto. 
```
npm install
```

### Execute este comando para subir o servidor para desenvolvimento.
```
npm run serve
```

### Execute este comando para iniciar a API de teste server-json para desenvolvimento. Os dados da API estão em db/db.json
```
npm run backend
```

### Compile o projeto para produção
```
npm run build
```
Após compilar o projeto, os arquivos do app para produção estará dentro da pasta dist. Copie o conteúdo dessa pasta para o servidor/domínio de produção. Caso os arquivos do app não fiquem na raiz do domínio/servidor informe o nome da pasta ou caminho atá a pasta do app no arquivo vue.config.js

>
    module.exports = {
        publicPath: process.env.NODE_ENV === 'production'
            ? '/public' //Informe aqui o caminho da raiz do app
            : '/'
    }
>
