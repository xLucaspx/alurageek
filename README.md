# AluraGeek

## Quarto challenge do [programa ONE](https://www.oracle.com/br/education/oracle-next-education/ "Oracle Next Education"): desenvolver um site simulando um e-commerce responsivo e dinâmico. 

Todos os produtos são criados dinâmicamente, assim como a página de informações de cada um, utilizando javascript. O design foi baseado no projeto disponibilizado no Figma pela equipe do ONE.

O email e senha cadastrados são "aluno@alura.com" e "alura123", respectivamente; porém fazer login apenas redireciona o usuário para a página de produtos, pois o foco do projeto foi utilizar CRUD e Fetch API para buscar e mostrar os produtos.

O estado atual do projeto pode ser conferido [neste link](https://xlucaspx.github.io/alurageek/index.html "AluraGeek | Home") e permite apenas a visualização dos produtos, pois está apenas simulando um servidor REST com [My JSON Server](https://my-json-server.typicode.com/ "My JSON Server - Fake Online REST server for teams");

Caso queira ver o projeto funcionando completamente, você pode fazer o download dos arquivos [aqui](https://github.com/xLucaspx/alurageek/archive/refs/tags/v0.1.0.zip "AluraGeek - versão para ser utilizada com json-server"), onde o endereço da fetch API está adaptado para o uso do [json-server](https://github.com/typicode/json-server "Repositório json-server").

Após fazer o download, execute o json-server com 
```
  json-server --watch db.json 
```
caso tenha instalado o json-server globalmente, ou 
```
  npx json-server --watch db.json
```
caso tenha instalado o json-server apenas no diretório do projeto.

E pronto, agora você pode cadastrar novos produtos e editar ou deletar os existentes!
