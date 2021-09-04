import React from 'react'
import Paper from "./Paper";

export default function NavMenu({children}) {
    return <div style={{
        position: "sticky",
        top: "30px"
    }}>
        <Paper>
            <ul style={{listStyleType: "square", margin: "0", paddingLeft: "10px"}}>
                {children}
            </ul>
        </Paper>
    </div>
}