import Header from './Header';
import SearchBar from './SearchBar'
import Coins from './CrytpoList'


function Layout({children, organizedCoins}) {
  return(
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout