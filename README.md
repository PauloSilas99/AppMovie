
#  Projeto

App Search Movie

Esse projeto é uma aplicação em React Js que consome uma Api de filmes "The Movie Database" (TMDb) e utiliza um arquivo ".env" para armazenar as variáveis de ambiente, como a chave da API.

## Instalação

1. Clone o repositório em sua máquina local:
    git clone https://github.com/PauloSilas99/AppMovie.git

2. Navegue até o diretório do projeto:
    cd app-filme

3. Instale as dependências:
    npm install
    npm install react-router-dom

4. Configure o arquivo ".env":
    Crie um arquivo .env na raiz do projeto e adicione as variáveis de ambiente
    VITE_API_KEY=f3e3db28642bdd2a0c1d058a21b7a1dc
    VITE_API=https://api.themoviedb.org/3/movie
    VITE_SEARCH=https://api.themoviedb.org/3/search/movie
    VITE_IMG=https://image.tmdb.org/t/p/

## Execução

Para iniciar o projeto localmente, use o seguinte comando:

npm run dev
