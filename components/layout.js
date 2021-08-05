import Header from './Header';
import SearchBar from './SearchBar'
import Coins from './CrytpoList'


function Layout({children, title="Crypto List"}) {
  return(
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout