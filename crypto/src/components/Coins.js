import React from "react";

const Coins = ({ coinData }) => {
  return (
    <div className="coins-container">
      <div className="data-container">
        <img src={coinData.image} alt={coinData.id} />
        <p className="symbol">{coinData.symbol}</p>
        <p className="name">{coinData.name}</p>
        <p  className="price">$ {coinData.current_price.toLocaleString()}</p>
        <p
          className={
            coinData.price_change_percentage_24h < 0
              ? "ascending"
              : "descending"
          }
        >
          % {coinData.price_change_percentage_24h}
        </p>
        <p  className="cap">$ {coinData.market_cap.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Coins;
