import { ThemeProvider } from 'next-themes'
import Layout from '../components/layout'
import * as React from 'react'
import '../styles/globals.css'
// import { fabBitcoin, fabEthereum} from '@fortawesome/free-brands-svg-icons'

// config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return( 
  <ThemeProvider attribute="class">
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>  
  )
}

export default MyApp