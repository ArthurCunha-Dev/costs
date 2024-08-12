import styles from './input.module.css'

function input({type, text, name, placeholder, handleOnChange, value}) {
 return (
    <div className={syles.form_control}>
        <label htalFor={name}>{text}:</label>
        <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value} />
    </div>
 )
}

export default input