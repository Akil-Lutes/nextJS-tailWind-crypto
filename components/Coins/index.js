// My Coins component of what I want to render to the screen

const Coins = ({
    name,
    price,
    symbol,
    marketcap,
    marketcaprank,
    alltimehigh,
    circulatingsupply,
    totalsupply,
    image


}) => {
    return(
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default Coins