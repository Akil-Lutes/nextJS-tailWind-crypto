import Header from './Header';
import SearchBar from './SearchBar'


function Layout({children}) {
  return(
    <div>
      <Header />
      {children}
      <SearchBar />
    </div>
  )
}

export default Layout