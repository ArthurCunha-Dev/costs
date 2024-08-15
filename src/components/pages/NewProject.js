import { useHistory} from 'react-router-dom'

import ProjectForm from '../project/ProjectForm';

import styles from './NewProject.module.css'; 

function NewProject() {

const history = useHistory()

function createPost(projects) {

 // initialize cost and service
 projects.cost = 0
 projects.services = []

 fetch ("http://localhost:5000/projects",  {
    method: "POST",
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(project)
}).then((resp) => resp.json())
  .then((data) =>{
    console.log(data)
    // redirect
})
  .catch(err => console.log (err))

}


    return (
        <div className={styles.newproject_container}>
            <h1>New Project</h1>
            <p>Crie seu projeto para depois adicionar<p/></p> 
            <p>serviços</p>
            <ProjectForm  btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject;
