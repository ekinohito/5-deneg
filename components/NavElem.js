import React from 'react'

export default function NavElem({children}) {
    return <li style={{
        cursor: "pointer"
    }}>
        {children}
    </li>
}