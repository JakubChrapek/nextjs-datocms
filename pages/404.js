import Container from '@/components/container';
import Layout from '@/components/layout';
import Link from 'next/link';
import styled from 'styled-components'

const NotFoundPageStyles = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: underline;
    margin-top: 1.5rem;
    &:hover {
      color: var(--accent);
    }
  }
`

const Page = () => {
  return (
    <Layout>
    <Container>
      <NotFoundPageStyles>
        <h2>
          Page Not Found.
        </h2>
        <Link href="/">&larr; Back to home</Link>
      </NotFoundPageStyles>
    </Container>
    </Layout>
  );
}

export default Page;