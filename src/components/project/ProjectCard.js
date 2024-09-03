import styles from './ProjectCard.module.css';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';

function ProjectCard({ id, name, budget, category, handleRemove }) {
    return (
        <div className={styles.projectCard}>
            <h2>{name}</h2>
            <p>Orçamento: {budget}</p>
            <p>Categoria: {category}</p>
            <button onClick={() => handleRemove(id)}><BsFillTrashFill /> Remover</button>
            <button><BsPencil /> Editar</button>
        </div>
    ); 
}

export default ProjectCard;
