import {motion} from 'framer-motion'
import '../styles/index.css'
import GlobalStyles from "../styles/globalStyles"

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        }
      }}
    >
      <GlobalStyles />
      <Component {...pageProps} />
    </motion.div>
  )
}

export default MyApp
