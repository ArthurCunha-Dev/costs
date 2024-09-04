import { useLocation } from 'react-router-dom'

 import { useState, useEffect } from 'react'

import Message from '../layout/Message'
import Container from '../layout/Container'

import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'

import styles from './Projects.module.css'
import Loading from '../layout/Loading'

function Projects (){
 const [projects, setProjects] = useState([])
 const [removeLoading, setRemoveLoading] = useState(false)

    const location = useLocation()
    let message = ''
    if(location.state) {
        message = location.state.message
    }
        
    useEffect(() => {
        setTimeout(
            () =>{
                fetch  ("http://localhost:5000/projects", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                    },
                })
                .then((resp) => resp.json())
                .then((data) => {
                    console.log (data.category)
                    setProjects(data);
                    setRemoveLoading(true)
                })
                .catch((err) => console.log(err));
            }, 3000)
      
    }, [])
    
    return(
    <div className={styles.project_container}>
        <div className={styles.title_container}>
        <h1> Meus Projetos</h1>
        </div>
        {message && <Message type="sucess" msg={message} />}
        <Container customClass="start">
            {projects.length === 0 ? (
                <p>Não existem projetos cadastrados</p> // Mensagem exibida quando não há projetos
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
            {!removeLoading && <Loading/>}
        </Container>
        <div className={styles.project_container}>
          <LinkButton to="/newproject" text="Criar Projeto" />
        </div>
    </div>
    )
        
    
}

export default Projects;

