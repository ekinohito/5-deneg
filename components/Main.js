import React from 'react'
import NavMenu from "./NavMenu";
import NavElem from "./NavElem";
import InputForm from "./InputForm";
import Results from "./Results";

export default function Main() {
    return <main style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: "20px",
    }}>
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            maxWidth: "1024px",
            flexGrow: 1
        }}>
            <div style={{
                margin: "20px",
                flexGrow: 1
            }}>
                <NavMenu>
                    <NavElem>Прогноз доходов</NavElem>
                    <NavElem>Прогноз расходов</NavElem>
                    <NavElem>Тестирование программы</NavElem>
                </NavMenu>
            </div>
            <div style={{
                margin: "20px",
                flexGrow: 1
            }}>
                <InputForm/>
                <Results/>
            </div>
        </div>
    </main>
}