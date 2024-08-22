import { useLocation } from 'react-router-dom'

import Message from '../layout/Message'

function Projects (){
    return(
    <div>
        <h1> Meus Projetos</h1>
        <Message msg="Algum mensagem" type="error" />
    </div>
    )
        
    
}

export default Projects;