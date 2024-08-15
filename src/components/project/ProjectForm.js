import {useEffect, useState} from 'react'

import Input from '../layout/form/Input';
import Select from '../layout/form/Select';
import SubmitButton from '../layout/form/SubmitButton';


import styles from './ProjectForm.module.css';

function ProjectForm({ btnText }) {
    
    const [categories,setCategories] = useState([])
    
useEffect(() =>{
    fetch ("http://localhost:5000/categorie",  {
        method: "GET",
        headers:{
            'Content-Type': 'application/json'
        },
    })
    .then((resp) => resp.json())
    .then((data)=> {
       setCategories(data)
    })
    .catch((err) => console.log(err))

}, [])

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
                    name="category_id"  
                    text="Selecione a categoria"
                    options={categories}/> 
            </div>
            <SubmitButton text={btnText}/>
        </form>
    );
}

export default ProjectForm;