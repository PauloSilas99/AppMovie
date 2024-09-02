import { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';


function Home() {

  const [dados, setDados] = useState(null);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [query, setQuery] = useState('');
  const filmesPorPagina = 12;
  const buscar = import.meta.env.VITE_SEARCH;
  const apiBase = import.meta.env.VITE_API;
  const apikey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const endpoint = query
      ? `${buscar}?api_key=${apikey}&query=${query}&page=${page}`
      : `${apiBase}/popular?api_key=${apikey}&page=${page}`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, [page, query]);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(searchTerm);
    setPage(1);
  };

  return (
    <>
      <h1 className="colorTema">App Search Movie</h1>
      <h3 className="colorTema">Encontre o melhor Filme hoje mesmo!</h3>

      <form onSubmit={handleSearch} className="formInput">
        <input
          type="text"
          placeholder="Buscar filmes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </form>

      <div className="pagination">
        <button className="pagAnt" onClick={() => setPage((page) => Math.max(page - 1, 1))} disabled={page === 1}>
          Anterior
        </button>
        <span><strong>Página {page}</strong></span>
        <button className="pagProx" onClick={() => setPage((page) => page + 1)} disabled={!dados || !dados.results.length}>
          Próxima
        </button>
      </div>

      <MovieList dados={dados} filmesPorPagina={filmesPorPagina} />
    </>
  );
}

export default Home;
