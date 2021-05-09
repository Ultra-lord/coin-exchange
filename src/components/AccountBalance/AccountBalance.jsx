import React from 'react';
import PropTypes from 'prop-types'; 
import styled from 'styled-components'

const Section = styled.section`
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem  0 1.5rem 5rem;
`;

const Button = styled.button`
background-color: white;
color: black;
border: 2px solid #FFD300;
border-radius: 12px;
`;
const Button1 = styled.button`
background-color: white;
color: black;
border: 2px solid #4CAF50;
border-radius: 12px;
`;
export default function AccountBalance(props) {
    const buttonText= props.showBalance ? 'Hide Balance' : 'Show Balance';
    let content = null;
    if ( props.showBalance ) {
        content = <>Balance: ${props.amount} </>;
    }
    
    return (
        <Section>
            {content}  
            <Button onClick={props.handleBalanceToggle}>{buttonText}</Button>
            <Button1 onClick={props.handleAddBalance} >Add $1200</Button1>
        </Section>
    );

}




AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}