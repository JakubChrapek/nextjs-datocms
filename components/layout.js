import Alert from './alert'
import Footer from './footer'
import Header from './header'
import Meta from './meta'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyledWrapper = styled.div`
  min-height: 100vh;
`

export default function Layout({ preview, children, keyName }) {
  return (
    <motion.div
      key={keyName}
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        }
      }}
    >
      <Meta />
      <Header />
      <StyledWrapper>
        <Alert preview={preview} />
        <main>{children}</main>
      </StyledWrapper>
      <Footer />
    </motion.div>
  )
}
