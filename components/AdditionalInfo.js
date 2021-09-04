import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import styles from "../styles/AdditionalInfo.module.css"
import Paper from "./Paper";
import Input from "./Input";
import {refresh, setSpending} from "../redux/spendingSlice";
import Button from "./Button";
import api from "../utils/api";

export default function AdditionalInfo() {
    const results = useSelector(state => state.results)
    const [params, setParams] = useState({debt: "0", deficit: "0"})
    const isValid = (text) => text && !isNaN(text)
    const allSet = Object.keys(params).reduce((acc, curr) => acc && isValid(params[curr]), true)
    const dispatch = useDispatch()
    return  <div className={`${styles.results} ${results.ready?'':styles.hidden}`}>
        <Paper>
            <div className={styles.container}>
                <div className={styles.row}>
                    <span className={styles.cell}>Допустимый объем государственного долга:</span>
                    <span className={styles.cell}><Input params={params} setParams={setParams} index="debt"/></span>
                </div>
                <div className={styles.row}>
                    <span className={styles.cell}>Допустимый дефицит бюджета:</span>
                    <span className={styles.cell}><Input params={params} setParams={setParams} index="deficit"/></span>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "end"
                }}>
                    <Button text="Рассчитать возможные расходы" margin="0.5rem 0.5rem 0" disabled={!allSet} onClick={async () => {
                        dispatch(refresh())
                        const res = await api.get('spending', {
                            params: {...params, total: results.total},
                        })
                        dispatch(setSpending(res.data))
                    }
                    }/>
                </div>
            </div>
        </Paper>
    </div>
}