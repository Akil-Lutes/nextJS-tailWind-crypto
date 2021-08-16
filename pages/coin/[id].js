import Layout from "../../components/layout"

const Coin = ({ coin }) => {
    return (
        <div className="flex justify-center h-5/6 items-center">
          <div className="flex ">
            <img
              src={coin.image}
              alt={coin.name}
            />
            <h1>{coin.name}</h1>
            <p>{coin.symbol}</p>
            {/* <p>{coin.market_data.current_price.usd}</p> */}
          </div>
        </div>
    );
  };
  
  export default Coin;
  
  export async function getServerSideProps(context) {
    const {id} = context.query;
  
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  
    const data = await res.json();
  
    return {
      props: {
        coin: data
      }
    };
  }