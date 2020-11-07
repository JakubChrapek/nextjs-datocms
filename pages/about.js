import Container from '@/components/container'
import { getAllPostsForHome } from '@/lib/api'
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About us | company name</title>
      </Head>
      <Container>
        <h3>About page content</h3>
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
