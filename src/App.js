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
  state = {
    balance: 10000,
    showBalance: true,
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

  handleRefresh = (valueChangeTicker) => {
   const newCoinData = this.state.coinData.map( function(  values  ) {
     let newValues = { ...values } ;
    if (valueChangeTicker === values.ticker) {
      const randomPercentage = 0.995 + Math.random() * 0.01;
      newValues.price *= randomPercentage;
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
