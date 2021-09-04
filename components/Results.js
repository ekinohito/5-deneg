import React from 'react'
import Paper from "./Paper";
import {useSelector} from "react-redux";
import styles from "../styles/Results.module.css"

export default function Results() {
    const results = useSelector(state => state.results)
    return  <div className={`${styles.results} ${results.ready?'':styles.hidden}`}>
        <Paper>
            NDFL: {results.ndfl}
        </Paper>
    </div>

}
