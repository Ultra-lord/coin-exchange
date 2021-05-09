import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CoinRow = styled.td`
border: 3px solid;
    width: 25vh;
`;

const Button = styled.button`
background-color: white;
color: black;
border: 2.5px solid #FFD300;
border-radius: 8px;
`;


export default function Coin(props) {
    
    const  handleClick = (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();

        props.handleRefresh(props.tickerId);
    }  
        return (
            <tr>
              <CoinRow>{props.name}</CoinRow>
              <CoinRow>{props.ticker}</CoinRow>
              <CoinRow>${props.price}</CoinRow>
              {props.showBalance ? <CoinRow>{props.balance}</CoinRow> : null}
              <CoinRow>
                  <form action="#" method="POST">
                  <Button onClick={handleClick}>Refresh</Button>
                  </form>            
              </CoinRow>
            </tr>
           );
    
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired
}
