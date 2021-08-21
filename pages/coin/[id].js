import 'tailwindcss/tailwind.css'


const Coin = ({ coin }) => {
  return (
      <div className="coin_page flex justify-center items-center h-96">
        <div className="coin_container border border-green-400 rounded-lg flex flex-col justify-center items-center w-1/6">
          <img
            src={coin.image.large}
            alt={coin.name}
          />
          <h1 className="coin_name mb-4">{coin.name}</h1>
          <p className="coin_symbol mb-4">{coin.symbol.toUpperCase()}</p>
          <p className="mb-4">
            ${coin.market_data.current_price.usd}
          </p>
          {coin.market_data.price_change_percentage_7d < 0 ? (
                <p className="coin_percent text-red-600 text-center w-24">
                  7day {coin.market_data.price_change_percentage_7d.toFixed(2)}%
                </p>
              ) : (
                <p className="coin_percent text-green-400 text-center w-24">
                  7day {coin.market_data.price_change_percentage_7d.toFixed(2)}%
                </p>
              )}
        </div>
      </div>

  );
};

export default Coin;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);

  const data = await res.json();

  return {
    props: {
      coin: data
    }
  };
}
  
