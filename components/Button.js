import React, {useState} from 'react'

export default function Button({text="button", margin="0", onClick, disabled}) {
    const [pressed, setPressed] = useState(false)
    return <button style={{
        padding: "0.5rem",
        margin: margin,
        backgroundColor: disabled || pressed?"#4661cc":"#042EE4",
        borderStyle: "none",
        cursor: disabled?"default":"pointer",
        color: "#FFFFFF",
        borderRadius: "5px",
    }} onClick={disabled?undefined:onClick} onMouseDown={() => setPressed(true)} onMouseUp={() => setPressed(false)}>
        {text}
    </button>
}