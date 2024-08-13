import Select from '../form/Select';
import Input from '../layout/form/Input';

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
                <select text="Categoria" name="Category_id">
                    <option disabled>Selecione a categoria</option>
                    {}
                </select>
            </div>
            <Select />S
            <div>
                <Input 
                    type="submit" 
                    value="Criar Projeto" 
                />
            </div>
        </form>
    );
}

export default ProjectForm;
