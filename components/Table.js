import styled from '@emotion/styled'
import React from 'react'

const TableStyled = styled.table`
tr {
    border-bottom: 1px solid black;
}
`

export default function Table({ data }) {
    return (
        <TableStyled>
            {data.map(row => (
                <tr key={row.id}>
                    <td>{row.title}</td>
                    <td>{row.footer}</td>
                    <td>{row.tags?.map(tag => (
                        <li key={tag}>{tag}</li>
                    ))}</td>
                </tr>
            ))}
        </TableStyled>
    )
}
