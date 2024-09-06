import { useNavigate } from 'react-router-dom'; 
import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css'; 
import { useState } from 'react';
import Message from '../layout/Message';

function NewProject() {
    const navigate = useNavigate();
    const [msg, setMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')

    function createPost(projects) {
        //initialize cost and server
        setMsg('')
        setSuccessMsg('')
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
            setSuccessMsg('Projeto cadastrado com sucesso')
            localStorage.setItem('msg','Arthur Cunha')
           //redirect
            navigate('/projects');
        })
        .catch((err) => {
            console.log(err);
            setMsg('Algo de errado ocorreu!');
        });
    }

    return (
        <div className={styles.newproject_container}>
            <h1>New Project</h1>
            {successMsg && <Message type = 'success' msg ={successMsg} />}
            {msg && <Message type = 'error' msg ={msg} />}
            <p>Crie seu projeto para depois adicionar serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    );
}

export default NewProject;
