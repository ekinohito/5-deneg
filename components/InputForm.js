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
                <TabSelector text="2010" selectedState={selectedState} onSelect={onSelect}/>
                <TabSelector text="Ваши данные" selectedState={selectedState} onSelect={onSelect}/>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}>
                <Input margin="0.5rem" placeholder="Прогноз сборов" index="forecast" params={params} setParams={setParams}/>
                <Input margin="0.5rem" placeholder="Население" index="population" params={params} setParams={setParams}/>
                <Input margin="0.5rem" placeholder="Подакцизная продукция" index="alco" params={params} setParams={setParams}/>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}>
                <Input margin="0.5rem" placeholder="Индекс 1" index="index1" params={params} setParams={setParams}/>
                <Input margin="0.5rem" placeholder="Индекс 2" index="index2" params={params} setParams={setParams}/>
                <Input margin="0.5rem" placeholder="Индекс СDE" index="index_cde" params={params} setParams={setParams}/>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}>
                <Input margin="0.5rem" placeholder="Индекс C" index="index_c" params={params} setParams={setParams}/>
                <Input margin="0.5rem" placeholder="Индекс D" index="index_d" params={params} setParams={setParams}/>
                <Input margin="0.5rem" placeholder="Индекс E" index="index_e" params={params} setParams={setParams}/>
                <Input margin="0.5rem" placeholder="Индекс F" index="ingex_f" params={params} setParams={setParams}/>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}>
                <Input margin="0.5rem" placeholder="Налогооблагаемая прибыль" index="tax" params={params} setParams={setParams}/>
                <Input margin="0.5rem" placeholder="Инвестиции" index="inv2" params={params} setParams={setParams}/>
                <Input margin="0.5rem" placeholder="Оборот розницы" index="roz1" params={params} setParams={setParams}/>
                <Input margin="0.5rem" placeholder="Фонд ЗП" index="salary" params={params} setParams={setParams}/>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}>
                <Input margin="0.5rem" placeholder="Темпы роста импорта" index="import2" params={params} setParams={setParams}/>
                <Input margin="0.5rem" placeholder="Количество безработных" index="unemp1" params={params} setParams={setParams}/>
                <Input margin="0.5rem" placeholder="Уровень безработицы" index="unemp2" params={params} setParams={setParams}/>
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