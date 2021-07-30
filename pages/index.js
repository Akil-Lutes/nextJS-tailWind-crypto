import Head from 'next/head'
import SearchBar from '../components/SearchBar'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Crypto Tracker</title>
      </Head>
    </Layout>
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