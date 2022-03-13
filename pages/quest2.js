import React from 'react'
import Table from '../components/Table'


function quest2({ data }) {
    return (
        <div>
            Question 2
            <Table data={data} />
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://screening.moduit.id/frontend/web/question/two')
    const data = await res.json()
    return {
        props: {
            data,
        },
    }
}


export default quest2