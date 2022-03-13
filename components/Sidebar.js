import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'

const Container = styled.div`
& > * {
    margin: 16px;
}
`

export default function Sidebar({ menu }) {
    return (
        <Container>
            <div>Moduit</div>
            {menu.map(item => (
                <div key={item.href} ><Link href={item.href}>{item.name}</Link></div>
            ))}
        </Container>
    )
}
