import React from 'react';
import {Provider} from "react-redux";
import { Routes, Route } from "react-router-dom";
import './App.css';
import PaginaInicio from "./paginas/Inicio.pagina";
import PaginaFavoritos from "./paginas/Favoritos.pagina";
import PaginaDetalhe from "./paginas/Detalhe.pagina";
import Cabecalho from "./componentes/layout/cabecalho.componente";
import { store } from './componentes/store/reducers';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Cabecalho />
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="favoritos" element={<PaginaFavoritos />} />
          <Route path="detalhe" element={<PaginaDetalhe />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
