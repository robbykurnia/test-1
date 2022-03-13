import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import React from 'react'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'

const Container = styled.div`
display: flex;

.sidebar {
  width: 300px;
}
`

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const menu = [
    { href: '/quest1', name: 'Question 1' },
    { href: '/quest2', name: 'Question 2' }
  ]

  React.useEffect(() => {
    if (router.asPath === '/') {
      router.replace('/quest1')
    }
  }, [router.asPath])
  return (
    <Container>
      <Sidebar menu={menu} className='sidebar' />
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
