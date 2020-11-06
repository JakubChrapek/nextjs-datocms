import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '@/lib/constants'
import styled from 'styled-components'

const PreviewStyles = styled.div`
  border-bottom-width: 1px;
  background-color: ${({preview}) => preview ? 'var(--accent-7)' : 'var(--accent-1)'};
  border-color: ${({preview}) => preview ? 'var(--accent-7)' : 'var(--accent-2)'};
  color: ${({preview}) => preview && 'var(--white)'};
  padding: 8px 24px;
  p {
    text-align: center;
  }
  a {
    transition: color .2s ease-in-out;
    &:hover {
      color: var(--accent);
    }
  }
`

export default function Alert({ preview }) {
  return (
    <>
    {preview && (
      <PreviewStyles preview={preview}>
        <Container>
          <p>
            This page is a preview.{' '}
            <a
              href="/api/exit-preview"
            >
              Click here
            </a>{' '}
            to exit preview mode.
          </p>
        </Container>
      </PreviewStyles>
      )}
    </>
  )
}
