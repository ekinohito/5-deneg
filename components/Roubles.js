import React from 'react'

export default function Roubles({amount}) {
    return <span style={{
        fontSize: "1.5rem",
        fontWeight: "lighter",
    }}>
        {amount} руб.
    </span>
}