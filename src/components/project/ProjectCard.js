import styles from './ProjectCard.module.css';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importa os ícones

function ProjectCard({ id, name, budget, category, handleRemove }) {
    const remove = (e) => {
        e.preventDefault()
    }

    return (
        <div className={styles.project_card}>
            <h2>{name}</h2>
            < p>Orçamento: {budget}</p>
             <p>Categoria: {category}</p>
            <div className={styles.project_card_actions}>

                <Link to={`/project/${id}`}>
                  <BsPencil /> Editar
                </Link>

                <Link onClick={() => handleRemove(id)}>
                    <BsFillTrashFill onClick={remove} /> Remover
                </Link>
                
            </div>
            
        </div>
    ); 
}

export default ProjectCard;
