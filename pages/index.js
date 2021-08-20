import Head from 'next/head'
import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import CryptoList from '../components/CrytpoList'
import 'tailwindcss/tailwind.css'

export default function Home({organizedCoins}) {
  const [search, setSearch] = useState('')

  const altCoins = organizedCoins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = e => {
    // so the page wont have to be re rendered
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  return (
    <>
      <section className="bg-gray-200 dark:bg-lightgrey">
          <title>Crypto Tracker</title>
            <SearchBar type='text' placeholder='search' onChange={handleChange} />
            <CryptoList organizedCoins={altCoins} />
      </section>
    </>
      
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h')
  
  const organizedCoins = await res.json()

  return {
    props: {
      organizedCoins
    }
  }
}