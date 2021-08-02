import Head from 'next/head'
import SearchBar from '../components/SearchBar'
import Layout from '../components/layout'
import CryptoList from '../components/CrytpoList'
import Header from '../components/Header'

export default function Home({organizedCoins}) {
  console.log(organizedCoins)
  return (
      <Head>
        <title>Crypto Tracker</title>
        <Header />
        <SearchBar />
        <CryptoList organizedCoins={organizedCoins} />
      </Head>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
  
  const organizedCoins = await res.json()

  return {
    props: {
      organizedCoins
    }
  }
}