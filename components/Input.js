import React from 'react'

export default function Input({margin, placeholder, params, setParams, index}) {
    console.log(setParams && index && "norm")
    return <input
        style={{
        borderColor: "#022EED",
        borderWidth: "2px",
        borderStyle: "solid",
        borderRadius: "5px",
        backgroundColor: "#F8EDED",
        flexBasis: "auto",
        flexGrow: 1,
        padding: "0.5rem",
        width: "100px",
        margin: margin || "0.1rem"
    }}
        placeholder={placeholder}
        value={params && index && params[index]}
        onChange={setParams && index && ((e) => setParams({...params, index: e.currentTarget.value}))}/>
}