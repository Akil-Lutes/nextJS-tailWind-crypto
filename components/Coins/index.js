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
        <div className="coin-container flex justify-center border border-yellow-700">
            <div className="coin-row flex flex-row justify-start items-center h-2/4 w-4/5">
                <div className="coin flex items-center">
                    <img src={image} alt={name} className="coin_image" />
                    <h1 className="coin_name">{name}</h1>
                    <p className="coin_symbol">{symbol}</p>
                    <div className="coin_data">
                        <p className="coin_price">Price:{price}</p>
                        <p className="coin_ath">All Time High: {alltimehigh}</p>
                        {priceChange < 0 ? (
                <p className="coin_percent">
                  {priceChange.toFixed(2)}%
                </p>
              ) : (
                <p className="coin_percent">
                  {priceChange.toFixed(2)}%
                </p>
              )}
                        <p className="marketcapRank">{marketcaprank}</p>
                        <p className="marketCap">{marketcap}</p>
                        <p className="coin-circSupply">{circulatingsupply}</p>
                        <p className="coin-totalSupply">{totalsupply}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coins