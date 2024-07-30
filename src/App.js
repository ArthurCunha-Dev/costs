import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Cadastrar from './components/pages/Cadastrar';



function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newproject">Novo Projeto</Link> 
        <Link to="/cadastrar">Cadastrar</Link>        

      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newproject" element={<NewProject />} />
        <Route path='/cadastrar' element={<Cadastrar/>} />

      </Routes>
      <p>Footer</p>
    </Router>
  );
}

export default App;
