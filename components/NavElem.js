import React from 'react'
import Link from 'next/link'

export default function NavElem({children, to}) {
    return <li style={{
        cursor: "pointer",
        fontSize: "1.2rem",
        margin: "1rem 0"
    }}>
        <Link href={to}>{children}</Link>
    </li>
}