import React from 'react'
import Paper from "./Paper";
import {useDispatch, useSelector} from "react-redux";
import styles from "../styles/Results.module.css"
import Roubles from "./Roubles";
import Button from "./Button";
import {setParam} from "../redux/paramSlice";
import Tooltip from "./Tooltip";

export default function Results() {
    const results = useSelector(state => state.results)
    const dispatch = useDispatch()
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
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "end"
                }}>
                    <Tooltip>
                        <Button text="Использовать в цепочке расчетов" margin="0.5rem 0.5rem 0" onClick={async () => {
                            dispatch(setParam(results.total))
                        }
                        }/>
                    </Tooltip>
                </div>
            </div>
        </Paper>
    </div>

}
