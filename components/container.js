import styled from 'styled-components'

const ContainerStyles = styled.div`
  width: 100%;
  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin: 0 auto;
`

export default function Container({ children }) {
  return <ContainerStyles>{children}</ContainerStyles>
}
