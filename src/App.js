import React from 'react';
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
const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';

class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: true,
    coinData: [
/*
      {
        name: 'Bitcoin',
        ticker: 'Btc',
        balance: 0.5,
        price: 9999.99
      },
      {
        name: 'Ethereum',
        ticker: 'Eth',
        balance: 35,
        price: 2999.99
      },
      {
        name: 'Tether',
        ticker: 'USDT',
        balance: 0.5,
        price: 1.0
      },
      {
        name: 'Ripple',
        ticker: 'XRP',
        balance: 1000,
        price: 1.3
      },
      {
        name: 'Bitcoin Cash',
        ticker: 'BCH',
        balance: 0,
        price: 298.99
      }, */
    ]
  }
  componentDidMount = async () => {

  const response = await axios.get('https://api.coinpaprika.com/v1/coins');
  const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
  
  const promises = coinIds.map(id => axios.get(tickerUrl + id));
  const coinData = await Promise.all(promises);   
  const coinPriceData = coinData.map(function(response) {
    const coin = response.data;
    return {
      key: coin.id,
      name: coin.name,
      ticker: coin.symbol,
      balance: 0,
      price: parseFloat(Number(coin.quotes.USD.price).toFixed(4)),
    };
  })
  // Retrieve the prices
  this.setState({ coinData: coinPriceData });     
  }

  handleRefresh = async (valueChangeId) => {
    let response = await axios.get(tickerUrl + valueChangeId);
    const refreshedData = response.data;
    const newCoinData = this.state.coinData.map( function( values ) {
      let newValues = {...values};
      if (valueChangeId === values.key) {
        newValues.price = parseFloat(Number(refreshedData.quotes['USD'].price).toFixed(2));
      }
      return newValues;
    });
    this.setState({ coinData: newCoinData });
  }

     handleBalanceToggle = () => {
       this.setState( function(oldState) {
         return {
           ...oldState,
           showBalance: !oldState.showBalance
         }

       });
     }

  render() {
    return (
      <Content>
        <Header />
        <AccountBalance amount={this.state.balance}
          showBalance={this.state.showBalance}
          handleBalanceToggle={this.handleBalanceToggle} />
       <CoinList coinData={this.state.coinData}
        handleRefresh={this.handleRefresh}
        showBalance={this.state.showBalance} />
      </Content>
    );
  }
  
}

export default App;
