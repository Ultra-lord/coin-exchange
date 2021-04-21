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
          price: 9999.99
        },
        {
          name: 'Ethereum',
          ticker: 'Eth',
          price: 2999.99
        },
        {
          name: 'Tether',
          ticker: 'USDT',
          price: 1.0
        },
        {
          name: 'Ripple',
          ticker: 'XRP',
          price: 1.3
        },
        {
          name: 'Bitcoin Cash',
          ticker: 'BCH',
          price: 298.99
        }
      ]
    }
  }
  render() {
    return (
      <Content>
        <Header />
        <AccountBalance amount = {this.state.balance} />
       <CoinList coinData={this.state.coinData} />
      </Content>
    );
  }
  
}

export default App;
