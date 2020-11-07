import Container from '@/components/container'
import MoreStories from '@/components/more-stories'
import HeroPost from '@/components/hero-post'
import Layout from '@/components/layout'
import { getAllPostsForHome } from '@/lib/api'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog</title>
        </Head>
        <Container>
          <h3>Home page content</h3>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) || []
  return {
    props: { allPosts },
  }
}
