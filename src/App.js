import React, {useState, useEffect} from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import Header from './components/Header/Header';
import styled from 'styled-components';
import axios from 'axios';

const Content = styled.div`
text-align: center;
  background-color: rgb(82, 79, 79);
  color: rgb(180, 178, 19);
`;

const COIN_COUNT = 10;
const formatPrice = price => parseFloat(Number(price).toFixed(4));


function App(props) {
  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(true)
  const [coinData, setCoinData] = useState([]); 

const componentDidMount = async () => {
  const response = await axios.get('https://api.coinpaprika.com/v1/coins');
  const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
  const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/'
  const promises = coinIds.map(id => axios.get(tickerUrl + id));
  const coinData = await Promise.all(promises);   
  const coinPriceData = coinData.map(function(response) {
    const coin = response.data;
    return {
      key: coin.id,
      name: coin.name,
      ticker: coin.symbol,
      balance: 0,
      price: formatPrice(coin.quotes.USD.price),
    };
  })
  // Retrieve the prices    
  setCoinData(coinPriceData);
  }

  useEffect(function() {
    if (coinData.length === 0 ) {
     componentDidMount();
    } 
  });

  const handleRefresh = async (valueChangeId) => {
    const tickerUrl = `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
    let response = await axios.get(tickerUrl);
    const newPrice = formatPrice(response.data.quotes.USD.price);
    const newCoinData = coinData.map( function( values ) {
      let newValues = {...values};
      if (valueChangeId === values.key) {
        newValues.price = newPrice;
      }
      return newValues;
    });
  
    setCoinData(newCoinData);
  }

  const   handleBalanceToggle = () => {
       setShowBalance(oldValue => !oldValue);
     }

  
    return (
      <Content>
        <Header />
        <AccountBalance amount={balance}
          showBalance={showBalance}
          handleBalanceToggle={handleBalanceToggle} />
       <CoinList coinData={coinData}
        handleRefresh={handleRefresh}
        showBalance={showBalance} />
      </Content>
    );
  
  
}

export default App;
