import styles from './ProjectCard.module.css';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';


function ProjectCard({ id, name, budget, category, handleRemove }) {
    const remove = (e) => {
        e.preventDefault()
    }

    return (
        <div className={styles.project_card}>
            <h2>{name}</h2>
            < p>Orçamento: {budget}</p>
             <p>Categoria: {category}</p>
            <button onClick={() => handleRemove(id)}>
                <BsFillTrashFill onClick={remove} /> Remover
            </button>
            <button>
                <BsPencil /> Editar
            </button>
        </div>
    ); 
}

export default ProjectCard;
