import React from 'react'
import Paper from "./Paper";
import {useSelector} from "react-redux";
import styles from "../styles/Results.module.css"
import Roubles from "./Roubles";

export default function Results() {
    const results = useSelector(state => state.results)
    return  <div className={`${styles.results} ${results.ready?'':styles.hidden}`}>
        <Paper>
            <div className={styles.container}>
                <div className={styles.row}>
                    Налог на доходы физических лиц: <Roubles amount={results.ndfl}/>
                </div>
                <div className={styles.row}>
                    Налог на прибыль предприятий: <Roubles amount={results.npp}/>
                </div>
                <div className={styles.row}>
                    Итого: <Roubles amount={results.total}/>
                </div>
            </div>
        </Paper>
    </div>

}
