import Container from '@/components/container'
import { getAllPostsForHome } from '@/lib/api'
import Head from 'next/head'

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | company name</title>
      </Head>
      <Container>
        <h3>Services page content</h3>
      </Container>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) || []
  return {
    props: { allPosts },
  }
}
