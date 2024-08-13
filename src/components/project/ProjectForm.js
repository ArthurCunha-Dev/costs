
import Input from '../layout/form/Input';
import Select from '../layout/form/Select';
import LinkButton from '../layout/LinkButton';

import styles from './ProjectForm.module.css';

function ProjectForm() {
    return (
        <form className={styles.form}>
            <Input 
                type="text"
                text="Nome do projeto" 
                name="name" 
                placeholder="Insira o nome do projeto" 
            />
            <div>
                <Input 
                    type="number"
                    text="Orçamento total" 
                    name="budget"
                    placeholder="Insira o orçamento total" 
                />
            </div>
            <div>               
                <Select                
                  text="Caregoria" 
                  name="select"                
                
                /> 
            </div>
            
            <div>
              <LinkButton to="/project" text="Gravar" />               
            </div>
        </form>
    );
}

export default ProjectForm;
