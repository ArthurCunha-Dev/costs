// import loading from '../../img/loading.png'

import styles from './Loading.module.css'

function Loading() {
    return(
        <div className={styles.loader_container}>
          {/* <img className={styles.loader} src={loading} alt="Loading" /> */}
          <p>Aguarde, estamos carregando seus projetos...</p>
        </div>
    )

}

export default Loading