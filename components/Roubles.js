import React from 'react'

function prettier(amount) {
    const str = amount.toFixed(0)
    const offset = 2 - str.length % 3
    return str.split("").map((value, index) => (index > 0) && ((index + offset) % 3 === 2)? " " + value:value).join("")
}

export default function Roubles({amount}) {
    return <span style={{
        fontSize: "1.5rem",
        fontWeight: "lighter",
    }}>
        {amount && prettier(amount)} руб.
    </span>
}