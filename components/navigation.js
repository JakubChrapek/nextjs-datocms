import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Container from './container'

const NavigationStyles = styled.ul`
  padding: 1.5rem 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  li {
    &:hover, &.active {
      color: var(--accent);
    }
    margin-right: 2.5rem;
    &:last-child {
      margin-right: 0;
    }
  }
`

export default function Navigation() {
  const router = useRouter();
  return (
    <Container>
      <NavigationStyles>
        <li className={router.pathname === "/" ? 'active' : "" }><Link href="/">Home</Link></li>
        <li className={router.pathname === "/about" ? 'active' : "" }><Link href="/about">About</Link></li>
        <li className={router.pathname === "/blog" ? 'active' : "" }><Link href="/blog">Blog</Link></li>
        <li className={router.pathname === "/services" ? 'active' : "" }><Link href="/services">Services</Link></li>
        <li className={router.pathname === "/offer" ? 'active' : "" }><Link href="/offer">Offer</Link></li>
      </NavigationStyles>
    </Container>
  )
}
