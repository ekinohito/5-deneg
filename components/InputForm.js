import React, {useState} from 'react'
import Paper from "./Paper";
import Input from "./Input";
import Heading from "./Heading";
import TabSelector from "./TabSelector";
import presets from "../utils/presets.json"
import Button from "./Button";
import {useDispatch} from "react-redux";
import {refresh, setResults} from "../redux/resultsSlice";
import api from "../utils/api";

export default function InputForm() {
    const firstTab = '2020'
    const selectedState = useState(firstTab)
    const [params, setParams] = useState(presets[firstTab])
    const onSelect = (text) => setParams(presets[text])
    const isValid = (text) => text && !isNaN(text)
    const allSet = Object.keys(params).reduce((acc, curr) => acc && isValid(params[curr]), true)
    const dispatch = useDispatch()
    return <Paper>
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch"
        }}>
            <Heading>Введите данные за год</Heading>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}>
                <TabSelector text="2020" selectedState={selectedState} onSelect={onSelect}/>
                <TabSelector text="2021" selectedState={selectedState} onSelect={onSelect}/>
                <TabSelector text="Ваши данные" selectedState={selectedState} onSelect={onSelect}/>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}>
                <Input margin="0.5rem" placeholder="param 1" index="param1" params={params} setParams={setParams}/>
                <Input margin="0.5rem" placeholder="param 2" index="param2" params={params} setParams={setParams}/>
                <Input margin="0.5rem" placeholder="param 3" index="param3" params={params} setParams={setParams}/>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}>
                <Input margin="0.5rem" placeholder="param 4" index="param4" params={params} setParams={setParams}/>
                <Input margin="0.5rem" placeholder="param 5" index="param5" params={params} setParams={setParams}/>
                <Input margin="0.5rem" placeholder="param 6" index="param6" params={params} setParams={setParams}/>
                <Input margin="0.5rem" placeholder="param 7" index="param7" params={params} setParams={setParams}/>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "end"
            }}>
                <Button text="Вычислить значение" margin="0.5rem 0.5rem 0" disabled={!allSet} onClick={async () => {
                    dispatch(refresh())
                    const res = await api.get('results', {
                        params
                    })
                    dispatch(setResults(res.data))
                }
                }/>
            </div>
        </div>
    </Paper>
}