import 'tailwindcss/tailwind.css'
import Header from './Header/index';


function Layout({children}) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout