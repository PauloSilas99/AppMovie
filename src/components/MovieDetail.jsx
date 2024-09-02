import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import left from '../assets/left.svg';
import relogio from '../assets/relogio.svg';
import data from '../assets/data.svg';
import estrelaBranca from '../assets/estrela-branca.svg';


function MovieDetail() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);
  const apikey = import.meta.env.VITE_API_KEY;
  const apiBase = import.meta.env.VITE_API;
  const imgBase = import.meta.env.VITE_IMG;

  useEffect(() => {
    fetch(`${apiBase}/${id}?api_key=${apikey}`)
      .then((response) => response.json())
      .then((json) => setFilme(json))
      .catch((error) => console.error('Erro ao buscar os dados do filme:', error))
  }, [id]);

  if (!filme) {
    return <div>Carregando...</div>;
  }

  return (
    <div className='grupMobile'>
      <h2 className="tituloDesc">{filme.title}</h2>

      <Link to="/" className="linkHome">
        <img src={left} alt="home" />
        Voltar para a lista
      </Link>
      
      <div className="detalhesFilme">
        <div className="divImg">
          <img src={`${imgBase}w300${filme.poster_path}`} alt={filme.title} />
        </div>

        <div>
          <div className="descFilme">
            <h3>Description:</h3>
            <p>{filme.overview}</p>
          </div>

          <div className='DetIcons'>
            <div className="iconesDiv">
              <p><strong>Data de lançamento: {new Date(filme.release_date).toLocaleDateString('pt-br')}</strong></p>
              <img src={data} alt="data" />
            </div>

            <div className="iconesDiv">
              <p><strong>Duração: {filme.runtime} minutos</strong></p>
              <img src={relogio} alt="relogio" />
            </div>

            <div className="iconesDiv">
              <p><strong>Nota: {filme.vote_average.toFixed(1)}</strong></p>
              <img src={estrelaBranca} alt="estrelaBranca" />
            </div>
          </div>
          <div className="LinkMobile">
              <img src={left} alt="home" />
              <Link to="/">Voltar para a lista</Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
