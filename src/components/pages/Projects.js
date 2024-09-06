import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Message from '../layout/Message';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import ProjectCard from '../project/ProjectCard';
import Loading from '../layout/Loading'; 
import styles from './Projects.module.css';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation();
    let message = ''
    if (location.state) {
        message = location.state.message
    }
    

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
                    setLoading(false); 
                })
                .catch((err) => {
                    console.error(err);
                    setLoading(false); 
                });

                
            }, 5000)
      
    }, [])

    function removeProject(id){
        
     fetch('http://localhost:5000/projects/${id}', {
      method: 'DELETE',
      headers: {
       'Content-Type': 'application/json'
       },
     }).then(resp => resp.json())
     .then(data => {
        setProjects(projects.filter((project) => project.id !== id))
        setProjectMessage('Projeto removido com sucesso')
     })
     .catch(err => console.log(err))
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
            </div>
            {message && <Message type="success" msg={message} />}
            {projectMessage && <Message type="success" msg={projectMessage} />}
            <Container customClass="start">
                {loading ? (
                    <Loading /> 
                ) : projects.length === 0 ? (
                    <p>Não existem projetos cadastrados</p> 
                ) : (
                    projects.map((project) => (
                        <ProjectCard 
                            id={project.id}
                            name={project.name || 'Sem nome'}
                            budget={project.budget || ''}
                            category={project.category?.name || 'Categoria não disponível'}
                            key={project.id}
                            handleRemove={removeProject}
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
