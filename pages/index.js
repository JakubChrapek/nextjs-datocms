import Container from '@/components/container'
import { getAllPostsForHome } from '@/lib/api'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>Home Page Title | company name</title>
      </Head>
      <Container>
        <h3>Home page content</h3>
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
