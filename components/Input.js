import React from 'react'

export default function Input({margin, placeholder, params, setParams, index}) {
    console.log(setParams && index && "norm")
    return <label style={{
        margin: margin || "0.1rem",
        flexBasis: "auto",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch"
    }}>
        {placeholder}
        <div style={{
            display: "flex",

        }}>
            <input
                style={{
                    borderColor: "#042EE4",
                    borderWidth: "2px",
                    borderStyle: "solid",
                    borderRadius: "5px",
                    backgroundColor: "#F8EDED",
                    padding: "0.5rem",
                    width: "100px",
                    flexGrow: 1
                }}
                placeholder={placeholder}
                value={params && index && params[index]}
                onChange={setParams && index && ((e) => setParams({...params, [index]: e.currentTarget.value}))}/>
        </div>

    </label>
}