import React from 'react';
import ProjectForm from '../project/ProjectForm'; // Verifique se o caminho está correto
import styles from './NewProject.module.css'; // Certifique-se de que o caminho está correto

function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>New Project</h1>
            <p>Crie seu projeto para depois adicionar<p/></p> 
            <p>serviços</p>
            <ProjectForm  btnText="Criar Projeto"/>
        </div>
    );
}

export default NewProject;
