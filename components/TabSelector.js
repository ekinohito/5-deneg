import React, {useState} from 'react'

export default function TabSelector({text, selectedState, onSelect}) {
    const [selected, setSelected] = selectedState
    const isSelected = selected === text
    return <span style={{
        color: isSelected?"blue":"black",
        padding: "0.5rem",
        cursor: "pointer"
    }} onClick={() => {
        setSelected(text)
        onSelect && onSelect(text)
    }}>
        {text}
    </span>
}