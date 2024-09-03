import styles from './ProjectCard.module.css';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';

function ProjectCard({ id, name, budget, category, handleRemove }) {
    return (
        <div className={styles.project_card}>
            <h2>{name}</h2>
            <p>Orçamento: {budget}</p>
            <p>Categoria: {category}</p>
            <button onClick={() => handleRemove(id)}><BsFillTrashFill /> Remover</button>
            <button><BsPencil /> Editar</button>
        </div>
    ); 
}

export default ProjectCard;
