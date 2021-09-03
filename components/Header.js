import React from 'react'

export default function Header() {
    return <header style={{
        backgroundColor: "#022EED",
        height: "60px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        paddingLeft: "40px",
        boxShadow: "0px 6px 14px 2px rgba(0, 0, 0, 0.25)",
    }}>
        <span style={{
            color: "#FFFFFF",
            fontWeight: "bold", fontSize: "1.5rem"
        }}>#budget10</span>
    </header>
}