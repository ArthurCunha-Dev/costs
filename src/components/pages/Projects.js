import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Message from '../layout/Message';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import ProjectCard from '../project/ProjectCard';
import Loading from '../layout/Loading'; // Importação do componente Loading
import styles from './Projects.module.css';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true); // Inicializa como true para mostrar o carregamento

    const location = useLocation();
    const message = location.state?.message || ''; // Simplifica a obtenção da mensagem

    useEffect(() => {
        setTimeout(
            () =>{
                fetch("http://localhost:5000/projects", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                .then((resp) => resp.json())
                .then((data) => {
                    setProjects(data);
                    setLoading(false); // Define loading como false após carregar os dados
                })
                .catch((err) => {
                    console.error(err);
                    setLoading(false); // Define loading como false mesmo em caso de erro
                });

                
            }, 10000)
      
    }, [])

    


    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
            </div>
            {message && <Message type="success" msg={message} />}
            <Container customClass="start">
                {loading ? (
                    <Loading /> // Exibe o componente Loading enquanto está carregando
                ) : projects.length === 0 ? (
                    <p>Não existem projetos cadastrados</p> // Mensagem quando não há projetos
                ) : (
                    projects.map((project) => (
                        <ProjectCard 
                            id={project.id}
                            name={project.name || 'Sem nome'}
                            budget={project.budget || ''}
                            category={project.category?.name || 'Categoria não disponível'}
                            key={project.id}
                        />
                    ))
                )}
            </Container>
            <div className={styles.project_container}>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
        </div>
    );
}

export default Projects;
