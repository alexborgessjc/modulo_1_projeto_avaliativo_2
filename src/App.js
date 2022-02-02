import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ListaUnidades from "./pages/ListaUnidades";
import LancamentoDeGeracao from "./pages/LancamentoDeGeracao";
import NovaUnidade from "./pages/NovaUnidade";
import EditarUnidade from "./pages/Editar";

function App() {  
  return (
    <>     
      <Routes>              
          <Route path="/" element={<Login/>} />               
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/listaunidades" element={<ListaUnidades/>} />          
          <Route path="/lancamentodegeracao" element={<LancamentoDeGeracao/>} />    
          <Route path="/novaunidade" element={<NovaUnidade/>} />  
          <Route path="/editar/:id" element={<EditarUnidade/>} />     
        </Routes>                 
    </>
  );
}

export default App;
