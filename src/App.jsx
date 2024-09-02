
// import { useState, useEffect } from 'react'
// import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom'
// import estrela from './assets/estrela.svg'
// import estrelaBranca from './assets/estrela-branca.svg'
// import relogio from './assets/relogio.svg'
// import data from './assets/data.svg'
// import left from './assets/left.svg'
// import './App.css'

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<MovieList />} />
//         <Route path="/movie/:id" element={<MovieDetail />} />
//       </Routes>
//     </Router>
//   )
// }

// function MovieList() {
//   const [dados, setDados] = useState(null)
//   const [page, setPage] = useState(1)
//   const [searchTerm, setSearchTerm] = useState('')
//   const [query, setQuery] = useState('')
//   const filmesPorPagina = 12
//   const widthImg = 'w300'

//   const searchBase = import.meta.env.VITE_SEARCH;
//   const imgBase = import.meta.env.VITE_IMG;
//   const apiBase = import.meta.env.VITE_API;
//   const apikey = import.meta.env.VITE_API_KEY

//   useEffect(() => {
//     const endpoint = query 
//       ? `${searchBase}?api_key=${apikey}&query=${query}&page=${page}`
//       : `${apiBase}/popular?api_key=${apikey}&page=${page}`

//     fetch(endpoint)
//       .then(response => response.json())
//       .then(json => {
//         setDados(json)
//         console.log('dados aqui: ', json)
//       })
//   }, [page, query])

//   const handleSearch = (e) => {
//     e.preventDefault()
//     setQuery(searchTerm)
//     setPage(1)
//   }

//   return (
//     <>
//       <h1 className='colorTema'>App Search Movie</h1>
//       <h3 className='colorTema'>Encontre o melhor Filme hoje mesmo!</h3>

//       {/* Barra de Pesquisa */}
//       <form onSubmit={handleSearch} className='formInput'>
//         <input
//           type="text"
//           placeholder="Buscar filmes..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button type="submit">Pesquisar</button>
//       </form>

//       <div className="pagination">
//           <button className='pagAnt' onClick={() => setPage(page => Math.max(page - 1, 1))} disabled={page === 1}>
//             Anterior
//           </button>
//           <span><strong>Página {page}</strong></span>
//           <button className='pagProx' onClick={() => setPage(page => page + 1)} disabled={!dados || !dados.results.length}>
//             Próxima
//           </button>
//       </div>   
     
//       <div className='areaTotal'>
//         {dados && dados.results.slice(0, filmesPorPagina).map(filme => (
//           <div key={filme.id} className='iconeFilme'>
            
//             <img 
//               src={`${imgBase}${widthImg}${filme.poster_path}`} 
//               alt={filme.title} 
//             />
//             <h3>{filme.title}</h3>
//             <div className='nota'>
//               <p><strong>Nota: {filme.vote_average}</strong></p>
//               <img src={estrela} alt="estrela" />
//             </div>
//             <button className='btnSaibaMais'><Link to={`/movie/${filme.id}`}>Saiba mais</Link></button>
//             {/* <p>{filme.rating}</p> */}

//           </div>
//         ))}
//       </div>

//     </>
//   )
// }

// function MovieDetail() {
//   const { id } = useParams()  // Pega o ID do filme da URL
//   const [filme, setFilme] = useState(null)
//   const apikey = import.meta.env.VITE_API_KEY
//   const apiBase = import.meta.env.VITE_API;
//   const imgBase = import.meta.env.VITE_IMG;

//   useEffect(() => {
//     fetch(`${apiBase}/${id}?api_key=${apikey}`)
//       .then(response => response.json())
//       .then(json => {
//         setFilme(json)
//         console.log('Detalhes do filme: ', json)
//       })
//   }, [id])

//    if (!filme) return <div>Carregando...</div> //carregamento da página!

//   return (
//     <div>
//       <h2 className='tituloDesc'>{filme.title}</h2>
//       <div className='linkHome'>
//         <img src={left} alt="home" />
//         <Link to="/">Voltar para a lista</Link>
//       </div>
//       <div className='detalhesFilme'>
//         <div className='divImg'>
//           <img 
//           src={`${imgBase}w300${filme.poster_path}`} 
//           alt={filme.title} 
//           />
//         </div>

//         <div>

//           <div className='descFilme'>
//             <h3>Description:</h3>
//             <p>{filme.overview}</p>
//           </div>

//           <div>

//             <div className='iconesDiv'>
//               <p><strong>Data de lançamento: {filme.release_date}</strong></p>
//               <img src={data} alt="data" />
//             </div>

//             <div className='iconesDiv'>             
//                 <p><strong>Duração: {filme.runtime} minutos</strong></p>
//                 <img src={relogio} alt="relogio" />
//             </div>

//             <div className='iconesDiv'>
//               <p><strong>Nota: {filme.vote_average}</strong></p>
//               <img src={estrelaBranca} alt="estrelaBranca" />
//             </div>

//             <div className='LinkMobile'>
//               <img src={left} alt="home" />
//               <Link to="/">Voltar para a lista</Link>
//             </div>
            
//           </div>       
//         </div>

//       </div>
//     </div>
//   )
// }

// export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './components/MovieDetail';
import ScrollToTopButton from './components/BtnScroll';
import './styles/App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
