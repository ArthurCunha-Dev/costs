import { Link } from "react-router-dom";
import Container from "./Container";
import styles from './Navbar.module.css';
import logo from '../../img/logo.png';

function Navbar() {
  return (
    <nav className={styles.navbar} aria-label="Navegação principal">
      
        <Link to="/"><img src={logo} alt="Logo Costs" className={styles.logo}/></Link>
       
        <ul className={styles.list}>
          <li className={styles.item}> <Link to="/">Home</Link></li>
          <li className={styles.item}> <Link to="/projects">Projetos</Link></li>
          <li className={styles.item}> <Link to="/company">Empresa</Link></li>
          <li className={styles.item}> <Link to="/contact">Contato</Link></li>
        </ul>
        
    </nav>
  );
}


export default Navbar;
