import { useRouter } from 'next/router'
import Container from './container'
import Navigation from './navigation'
import styled from 'styled-components'

const HeaderStyles = styled.div`
  h2 {
    font-size: 2.25rem;
    letter-spacing: -0.04em;
    margin: 2rem 0 5rem;
    line-height: 1.2;
    font-weight: 700;
  }
`

export default function Header() {
  const router = useRouter();
  const CutName = router.pathname.slice(1).replace("[", "").replace("]", "");
  const pageName = 
  router.pathname.slice(1).length === 0 ? "Home" 
  : 
  CutName[0].toLocaleUpperCase() + CutName.slice(1);
  
  return (
    <>
      <Navigation />
      <Container>
      <HeaderStyles>
        <h2>
          {pageName}
        </h2>
      </HeaderStyles>
      </Container>
    </>
  )
}
