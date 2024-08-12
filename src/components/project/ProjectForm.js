import styles from './ProjectForm.module.css'

function ProjectForm() {
    return (
        <form className={styles.form}>
            <div>
              <input type="text" placeholder="Insira o nome do projeto" />
            </div>
            <div>
              <input type="number" placeholder="Insira o orçamento total" />
            </div>
           <div>
              <select name="Category_id">
                <options disabled>
                  Selecione a categoria
                </options>
            </select>
           </div>
           <div>
            <input type="submit" value="Criar Projeto" />
           </div>
        </form>
    )
}

export default ProjectForm