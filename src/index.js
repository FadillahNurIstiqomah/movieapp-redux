import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {Details} from './components/Details'
import Homepage from './components/Homepage'
import { AllMovies } from './components/AllMovies';
import Search from './components/Search';
// import { CategoryPage } from './components/CategoryPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="/movie/:id" element={<Details />}></Route>
          <Route path="/movies" element={<AllMovies />}></Route>
          <Route path="/search/:name" element={<Search />}></Route>
          {/* <Route path="/genre/:name" element={<CategoryPage />}></Route> */}
          {/* <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route> */}
        </Routes>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
