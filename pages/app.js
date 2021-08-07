import { library } from '@fortawesome/fontawesome-svg-core'
import 'tailwindcss/tailwind.css'
import './../styles/style.scss'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fabBitcoin, fabEthereum} from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp