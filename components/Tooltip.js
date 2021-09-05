import React from 'react'
import styles from '../styles/Tooltip.module.css'

export default function Tooltip({children}) {
    return <div className={styles.wrapper}>
        {children}
        <div className={styles.tooltip}>Экспериментальная функция!</div>
    </div>
}