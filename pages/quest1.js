import React from 'react'
import Table from '../components/Table'


function quest1({ data }) {
  return (
    <div>
      Question 1
      <Table data={data} />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://screening.moduit.id/frontend/web/question/one')
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}


export default quest1