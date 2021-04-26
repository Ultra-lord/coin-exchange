import React from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import Header from './components/Header/Header';
import styled from 'styled-components';

const Content = styled.div`
text-align: center;
  background-color: rgb(82, 79, 79);
  color: rgb(180, 178, 19);
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [

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
        },
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
  }
  handleRefresh(valueChangeTicker) {
   const newCoinData = this.state.coinData.map( function( {ticker, name, balance, price} ) {
     let newPrice = price;
    if (valueChangeTicker === ticker) {
      const randomPercentage = 0.995 + Math.random() * 0.01;
      newPrice = newPrice * randomPercentage;
        }
        return {
          ticker,
          name,
          balance,
          price: newPrice
        }

      });
      
      this.setState({ coinData: newCoinData });
     }

  render() {
    return (
      <Content>
        <Header />
        <AccountBalance amount = {this.state.balance} showBalance={true} />
       <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh} />
      </Content>
    );
  }
  
}

export default App;
