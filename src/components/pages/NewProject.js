import { useNavigate } from 'react-router-dom'; 
import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css'; 

function NewProject() {
    const navigate = useNavigate(); 

    function createPost(projects) {
        //initialize cost and server
        projects.cost = 0;
        projects.services = [];

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projects)
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
           //redirect
            navigate('/projects', {message:'Projeto criado com sucesso'});
        })
        .catch(err => console.log(err));
    }

    return (
        <div className={styles.newproject_container}>
            <h1>New Project</h1>
            <p>Crie seu projeto para depois adicionar serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    );
}

export default NewProject;
