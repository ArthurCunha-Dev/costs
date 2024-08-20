import styles from './Message.module.css'

function Message({type, msg}) {
    return(
     <div className={`${styles.Message} ${styles[type]}`}>{msg}</div>   
    )
}

 export default Message