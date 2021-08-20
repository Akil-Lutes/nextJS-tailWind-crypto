import Layout from '../../components/Layout';
import 'tailwindcss/tailwind.css'


const Coin = ({ coin }) => {
  return (
    <Layout>
      <div className>
        <div className>
          <img
            src={coin.image.small}
            alt={coin.name}
          />
          <h1 className>{coin.name}</h1>
          <p className>{coin.symbol}</p>
          <p className>
            {coin.market_data.current_price.usd}
          </p>
        </div>
      </div>
    </Layout>

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
  
