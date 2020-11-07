import {motion} from 'framer-motion'
import '../styles/index.css'
import GlobalStyles from "../styles/globalStyles"
import Layout from '@/components/layout'

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout
      keyName={router.route}
    >
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
