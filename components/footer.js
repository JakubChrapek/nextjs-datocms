import Container from './container'
import { EXAMPLE_PATH } from '@/lib/constants'
import styled from 'styled-components'

const FooterStyles = styled.footer`
  background-color: var(--accent-1);
  border-top: 1px solid var(--accent-2);

  .wrapper {
    padding: 112px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (min-width: 1440px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (min-width: 1440px) {
      flex-direction: row;
      justify-content: center;
      padding-left: 1rem;
    }
  }
  .btn {
    margin: 0 0.75rem;
    color: var(--white);
    padding: 0.75rem 2rem;
    transition: 
      background-color .15s cubic-bezier(0.47, 0, 0.745, 0.715),
      border-color .15s cubic-bezier(0.47, 0, 0.745, 0.715),
      color .15s cubic-bezier(0.47, 0, 0.745, 0.715);
    border: 1px solid var(--black);
    background-color: var(--black);
    font-weight: bold;
    &:hover {
      background-color: var(--white);
      color: var(--black);
    }
  }

  .visit {
    font-weight: bold;
    margin: 0 0.75rem;
    position: relative;
    &:after {
      content: '';
      width: 100%;
      height: 2px;
      position: absolute;
      bottom: -4px;
      left: 0;
      background-color: var(--black);
      transition: transform .15s cubic-bezier(0.47, 0, 0.745, 0.715);
    }
    &:hover {
      &:after {
        transform: translateY(-4px);
      }
    }
  }

`

export default function Footer() {
  return (
    <FooterStyles>
      <Container>
        <div className="wrapper">
          <h3>
            Statically Generated with Next.js.
          </h3>
          <div className="flex">
            <a
              href="https://nextjs.org/docs/basic-features/pages"
              className="btn"
            >
              Read Documentation
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="visit"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </FooterStyles>
  )
}
