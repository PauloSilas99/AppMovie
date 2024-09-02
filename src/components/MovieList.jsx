import { Link } from 'react-router-dom';
import estrela from '../assets/estrela.svg';

function MovieList({ dados, filmesPorPagina }) {
  const imgBase = import.meta.env.VITE_IMG;
  const widthImg = 'w300';

  if (!dados || !dados.results) {
    return <div>Carregando...</div>;
  }
  //função "sort()" => faz uma comparação e ordena os filmes de forma decrescente.
  //slice() => cria uma cópia do array "dados.results" antes de ordená-lo.
  const filmesOrdenados = dados.results.slice().sort((a, b) => b.vote_average - a.vote_average);
  
  return (
    <div className="areaTotal">
      {filmesOrdenados.slice(0, filmesPorPagina).map((filme) => (
        <div key={filme.id} className="iconeFilme">
          <img src={`${imgBase}${widthImg}${filme.poster_path}`} alt={filme.title} />
          <h3>{filme.title}</h3>
          <div className="nota">
            <p><strong>Nota: {filme.vote_average.toFixed(1)}</strong></p>
            <img src={estrela} alt="estrela" />
          </div>
          <button className="btnSaibaMais"><Link to={`/movie/${filme.id}`}>Saiba mais</Link></button>
        </div>
      ))}
    </div>
  );
}

export default MovieList;