// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home.jsx'
// import Movie from './pages/Movie.jsx'
// import Search from './pages/Search.jsx'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter >
//       <Routes>
//         <Route element={<App />}>
//             <Route path='/' element={<Home />} />
//             <Route path='movie/:id' element={<Movie />} />
//             <Route path='search' element={<Search />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//     <App />
//   </StrictMode>,
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/App.css'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

