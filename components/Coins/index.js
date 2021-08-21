import Link from 'next/link';

// My Coins component of what I want to render to the screen

const Coins = ({
    id,
    name,
    price,
    priceChange,
    symbol,
    marketcap,
    marketcaprank,
    alltimehigh,
    image


}) => {
    return (
    <Link href='/coin/[id]' as={`/coin/${id}`}>
      <a>
        <div className="coin-container flex justify-center content-evenly w-full md:w-auto">
            <div className="coin-row flex flex-row justify-start items-center h-20 w-1/3 md:w-5/6 px-8 border-b-2 border-gray-600 hover:bg-green-300">
                <div className="coin flex items-center pr-8 w-full">
                    <img src={image} alt={name} className="coin_image h-8 w-8 mr-2.5"/>
                    <h1 className="coin_name text-base w-40">{name}</h1>
                    <p className="coin_symbol uppercase hidden lg:flex">{symbol}</p>
                    <div className="coin_data flex text-right justify-between w-full">
                        <p className="coin_price w-32 hidden sm:flex justify-center text-center ml-10">Price <br></br> ${price}</p>
                        <p className="coin_ath w-32 hidden md:flex mr-16">All Time High ${alltimehigh}</p>
                        {priceChange < 0 ? (
                <p className="coin_percent text-red-600 hidden lg:flex w-24">
                  Price Change 24hr {priceChange.toFixed(2)}%
                </p>
              ) : (
                <p className="coin_percent text-green-400 hidden lg:flex w-24">
                  Price Change 24hr {priceChange.toFixed(2)}%
                </p>
              )}
                          <p className="marketcapRank hidden md:flex w-32">Mktcap Rank: {marketcaprank}</p>
                          <p className="marketCap hidden lg:flex">Mktcap: ${marketcap.toLocaleString()}</p>
                          
                      </div>
                  </div>
              </div>
          </div>
        </a>
    </Link>
  );
};

// Going to create a hover effect that shows more coin data

export default Coins

