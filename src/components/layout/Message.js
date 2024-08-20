import {useState, useEffect } from 'react'

import styles from './Message.module.css'

function Message({type, msg}) {
    const [visible, setVisible] = (false)

    useEffect(() => {

        if(!msg) {
            setVisible(false)
            return
        }


    }, [msg])

    return( <>
    ,{visible && (
        <div className={`${styles.Message} ${styles[type]}`}>{msg}</div>
    )}
    </>   )
}

 export default Message