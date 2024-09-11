import styles from './Project.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../layout/Loading';
import Container from '../layout/Container';

function Project() {
    const { id } = useParams();
    const [project, setProject] = useState({});
    const [showProjectForm, setShowProjectForm] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
            .then(resp => resp.json())
            .then((data) => {
                setProject(data);
                console.log(data);
            })
            .catch(err => console.log(err));
        }, 3000);
    }, [id]);

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm);
    }

    return (
        <>
            {project.name ? (
                <div>
                    <Container customClass="column">
                        <div className={styles.project_details}>
                            <h1>Projeto: {project.name}</h1>
                            <button onClick={toggleProjectForm}>
                                {!showProjectForm ? 'Editar projeto' : 'Fechar'}
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.details_container}>
                                    <p>
                                        <span>Categoria:</span> {project.category ? project.category.name : 'N/A'}
                                    </p>
                                    <p>
                                        <span>Total de Orçamento:</span> {project.budget || 'N/A'}
                                    </p>
                                    <p>
                                        <span>Total utilizado:</span> {project.cost || 'N/A'}
                                    </p>
                                </div>
                            ) : (
                                <div>
                                    <p>Detalhes do projeto</p>
                                </div>
                            )}
                        </div>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
}

export default Project;
