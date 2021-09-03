import React from 'react'
import Paper from "./Paper";

export default function NavMenu({children}) {
    return <Paper>
        <ul style={{listStyleType: "square", margin: "0", paddingLeft: "10px"}}>
            {children}
        </ul>
    </Paper>
}