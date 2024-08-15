import styles from './Select.module.css'

function Select ({ text, name, options, handleOnChange, value}) {
 return (
    <div className={styles.form_control}>
        <label htalFor={name}>{text}:</label>
        <select name={name} id={name}>
            <options>Selecione uma opção</options>
            {options.map(() => (
              <options value={options.id} key={options.id}>
                {options.name}
              </options>
            ))}
        </select>
    </div>
 )
}

export default Select