import React from 'react'

export default function Paper({children, padding}) {
    return <div style={{
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 6px 14px 2px rgba(0, 0, 0, 0.25)",
        borderRadius: "20px",
        padding: padding || "30px"
    }}>
        {children}
    </div>
}