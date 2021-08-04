// My Coins component of what I want to render to the screen

const Coins = ({
    name,
    price,
    priceChange,
    symbol,
    marketcap,
    marketcaprank,
    alltimehigh,
    circulatingsupply,
    totalsupply,
    image


}) => {
    return(
        <div className="coin-container flex justify-center w-full md:w-auto">
            <div className="coin-row flex flex-row justify-start items-center h-3/4 w-1/3 md:w-5/6 border-b-2 border-fuchsia-600 hover:bg-green-300">
                <div className="coin flex items-center pr-8 w-full">
                    <img src={image} alt={name} className="coin_image h-8 w-8 mr-2.5"/>
                    <h1 className="coin_name text-base w-40">{name}</h1>
                    <p className="coin_symbol uppercase">{symbol}</p>
                    <div className="coin_data flex text-right justify-between w-full">
                        <p className="coin_price w-32">Price: {price}</p>
                        <p className="coin_ath w-32">All Time High: {alltimehigh}</p>
                        {priceChange < 0 ? (
                <p className="coin_percent w-32">
                  {priceChange.toFixed(2)}%
                </p>
              ) : (
                <p className="coin_percent">
                  {priceChange.toFixed(2)}%
                </p>
              )}
                        <p className="marketcapRank w-32">Marketcap Rank: {marketcaprank}</p>
                        <p className="marketCap">Marketcap: {marketcap}</p>
                        {/* <p className="coin-circSupply">Circulating Supply: {circulatingsupply}</p> */}
                        {/* <p className="coin-totalSupply">Total Supply: {totalsupply}</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

// Going to create a hover effect that shows more coin data

export default Coins

// border border-yellow-700