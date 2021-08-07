import Header from './Header';
import SearchBar from './SearchBar'
import Coins from './CrytpoList'


function Layout({children, title="Crypto List"}) {
  return(
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
    </div>
  )
}

export default Layout