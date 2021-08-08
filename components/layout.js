import Header from './Header';
import 'tailwindcss/tailwind.css'


function Layout({children, title="Crypto List"}) {
  return(
    <div>
        <title>{title}</title>
      <Header />
      {children}
    </div>
  )
}

export default Layout