import styles from './Project.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../layout/Loading';
import Container from '../layout/Container';
import ProjectForm from '../project/ProjectForm';
import Message from '../layout/Message'

function Project() {
    const { id } = useParams();
    const [project, setProject] = useState({});
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState()
    const [type, setType] = useState()
    const navigate = useNavigate();

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
            .catch(err => {
                console.log(err);
                setError('Não foi possível carregar o projeto.');
            });
        }, 5000);
    }, [id]);

    function editPost(project) {
        // Budget validation
        if (project.budget < project.cost) {
            setError('O orçamento não pode ser menor que o custo.')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then(resp => resp.json())
        .then((data) => {
            setProject(data)
            setShowProjectForm(false)
            setMessage('Projeto atualizado!')
            setType('succes')
            navigate(-1)
        })
        .catch(err => {
            console.log(err);
            setError('Não foi possível atualizar o projeto.');
        });
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm);
    }

    return (
        <>
            {error && <p className={styles.error}>{error}</p>}
            {project ? (
                <div className={styles.project_details}>
                    <Container customClass="column">
                        {message && <Message type={type} msg={message} />}
                        <div className={styles.details_container}>
                            <h1>Projeto: {project.name}</h1>
                            <button className={styles.btn} onClick={toggleProjectForm}>
                                {!showProjectForm ? 'Editar projeto' : 'Fechar'}
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.project_info}>
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
                                <div className={styles.project_info}>
                                    <ProjectForm  
                                        handleSubmit={editPost} 
                                        btnText="Concluir edição" 
                                        projectData={project}
                                    />
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
