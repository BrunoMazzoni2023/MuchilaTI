import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Vendas from './pages/Vendas';
import Contato from './pages/Contato';
import Manutencao from './subpages/Manutencao';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/vendas" element={<Vendas />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/Manutencao" element={<Manutencao />} />

      </Routes>
    </Router>
  );

  
}

export default App;
