import Container from '@/components/container'
import { getAllPostsForHome } from '@/lib/api'
import Head from 'next/head'

export default function Offer() {
  return (
    <>
      <Head>
        <title>Offer | company name</title>
      </Head>
      <Container>
        <h3>Offer page content</h3>
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
