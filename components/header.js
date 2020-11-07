import { useRouter } from 'next/router'
import Container from './container'
import Navigation from './navigation'
import styled from 'styled-components'

const HeaderStyles = styled.div`
  h2 {
    font-size: 4rem;
    letter-spacing: -0.04em;
    margin: 2rem 0 5rem;
    line-height: 1.2;
    font-weight: 700;
    @media only screen and (min-width: 1025px) {
      font-size: 4.5rem;
    }
  }
`

export default function Header() {
  const router = useRouter();
  const trimmedPath = router.pathname.slice(1);
  const name = trimmedPath.length === 0 ? "Home"
  : trimmedPath[0].toUpperCase() + trimmedPath.slice(1)

  const isPost = trimmedPath.includes("slug");

  return (
    <>
      <Navigation />
      { !isPost && (
        <Container>
          <HeaderStyles>
            <h2>
              {name}
            </h2>
          </HeaderStyles>
        </Container>
      )}
    </>
  )
}
