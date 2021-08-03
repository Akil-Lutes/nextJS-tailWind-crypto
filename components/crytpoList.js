import Coins from './Coins';

// This is my crypto props setup list. I passed in the api results from index.js pages (organizedCoins)

export default function CryptoList({organizedCoins}) {
    return(
    <>
        {organizedCoins.map(coin => {
            return(
                <Coins
                key={coin.id} 
                name={coin.name}
                id={coin.id}
                price={coin.current_price}
                priceChange={coin.price_change_percentage_24h}
                symbol={coin.symbol}
                marketcap={coin.market_cap}
                marketcaprank={coin.market_cap_rank}
                alltimehigh={coin.ath}
                circulatingsupply={coin.circulating_supply}
                totalsupply={coin.total_supply}
                image={coin.image}
                />
            )

        })}
    </>
    )
}