import React from 'react'
import Paper from "./Paper";

export default function NavMenu({children}) {
    return <div style={{
        position: "sticky",
        top: "30px"
    }}>
        <Paper>
            <ul style={{listStyleType: "none", margin: "1rem 0", paddingLeft: "10px"}}>
                {children}
            </ul>
        </Paper>
    </div>
}