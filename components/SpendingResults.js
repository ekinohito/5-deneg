import React from 'react'
import {useSelector} from "react-redux";
import styles from "../styles/Results.module.css";
import Paper from "./Paper";
import Roubles from "./Roubles";
import spendings from "../utils/spendings.json"

export default function SpendingResults() {
    const results = useSelector(state => state.results)
    const spending = useSelector(state => state.spending)
    return  <div className={`${styles.results} ${(results.ready && spending.ready)?'':styles.hidden}`}>
        <Paper>
            <div className={styles.container}>
                { spendings.map(([index, title]) =>
                    <div className={styles.smRow}>
                        {title}: <Roubles amount={spending[index]}/>
                    </div>
                )}
                <hr style={{width: "100%", color: "#AAAAAA", borderStyle: "solid"}}/>
                <div className={styles.row}>
                    Итого: <Roubles amount={spending.total}/>
                </div>
            </div>
        </Paper>
    </div>
}