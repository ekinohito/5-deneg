import React from 'react'
import {useSelector} from "react-redux";
import styles from "../styles/Results.module.css";
import Paper from "./Paper";
import Roubles from "./Roubles";

export default function SpendingResults() {
    const results = useSelector(state => state.results)
    const spending = useSelector(state => state.spending)
    return  <div className={`${styles.results} ${(results.ready && spending.ready)?'':styles.hidden}`}>
        <Paper>
            <div className={styles.container}>
                <div className={styles.row}>
                    Итого: <Roubles amount={spending.total}/>
                </div>
            </div>
        </Paper>
    </div>
}