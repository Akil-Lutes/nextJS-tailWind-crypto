import Head from 'next/head'
import SearchBar from '../components/SearchBar'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Crypto Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Crypto Tracker</h1>
      <SearchBar type="text" placeholder="Search" />
    </div>
  )
}
