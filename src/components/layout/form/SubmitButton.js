import styles from './SubmitButton.module.css'


function SubmitButton ({ text }) {
 return (
    <div>
        <button clasName={styles.btn}>{text}</button>
    </div>
 )
}

export default SubmitButton;