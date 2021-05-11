import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CoinRow = styled.td`
border: 3px solid;
    width: 14vw;
`;

const Button = styled.button`
width: 64px;
border-radius: 8px;
margin: 3px 5px 0;
`;

const TdControls = styled(CoinRow)`
    width: 34vw;
`;

const TdName = styled(CoinRow)`
    width: 24vw;
`;

export default function Coin(props) {
    
    const  handleRefresh = (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();

        props.handleRefresh(props.tickerId);
    }  

    const  handleBuy = (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();

        props.handleTransaction(true, props.tickerId);
    }  

    const  handleSell = (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();

        props.handleTransaction(false, props.tickerId);
    }  

    const buttonClass1 = 'btn ' + 'btn-outline-warning';

        return (
            <tr>
              <TdName>{props.name}</TdName>
              <CoinRow>{props.ticker}</CoinRow>
              <CoinRow>${props.price}</CoinRow>
              <CoinRow>{props.showBalance ? props.balance : '-'}</CoinRow>
              <TdControls>
                  <form action="#" method="POST">
                <Button 
                    onClick={handleRefresh}
                    className={buttonClass1}>
                        <i class="fas fa-sync-alt"></i>
                </Button>
                <Button 
                    onClick={handleBuy}
                    className='btn btn-success'>
                        Buy
                </Button>
                <Button 
                    onClick={handleSell}
                    className='btn btn-danger'>
                        Sell
                </Button>
                  </form>            
              </TdControls>
            </tr>
           );
    
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired
}
