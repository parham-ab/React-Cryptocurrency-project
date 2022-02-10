import React, { useEffect, useState } from "react";
// components
import Coins from "./Coins";
import Loading from "./Loading";
// API
import { GetData } from "../services/api";

const CoinsList = () => {
  // fetch api data
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setCoins(await GetData());
    };
    fetchAPI();
  }, []);

  // filter
  const [search, setSearch] = useState("");
  const searchCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coinsList-container">
      <input
        type="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {coins.length ? (
        searchCoins.map((coin) => <Coins key={coin.id} coinData={coin} />)
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default CoinsList;
