import React from 'react'
import NavMenu from "./NavMenu";
import NavElem from "./NavElem";
import InputForm from "./InputForm";
import Results from "./Results";
import AdditionalInfo from "./AdditionalInfo";
import SpendingResults from "./SpendingResults";

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
                    <NavElem to="#income">Прогноз доходов</NavElem>
                    <NavElem to="#spending">Прогноз расходов</NavElem>
                </NavMenu>
            </div>
            <div style={{
                margin: "20px",
                flexGrow: 1
            }}>
                <InputForm/>
                <Results/>
                <AdditionalInfo/>
                <SpendingResults/>
            </div>
        </div>
    </main>
}