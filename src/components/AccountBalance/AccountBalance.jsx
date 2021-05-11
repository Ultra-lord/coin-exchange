import React from 'react';
import PropTypes from 'prop-types'; 
import styled from 'styled-components'

const Section = styled.section`
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    line-height: 3rem;
    display: inline-block;
    `;

const Balance = styled.div`
    min-width: 250px;
    margin: 0.5rem 0 0 2.5rem;
    font-size: 1.5rem;
    vertical-align: middle;
    text-align: center;
`;

const Button = styled.button`
border-radius: 12px;
margin: 0 8px;
`;

const BalanceToggleButton = styled(Button)`
width: 150px;
`;

var formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});
export default function AccountBalance(props) {
    const buttonText= props.showBalance ? 'Hide Balance' : 'Show Balance';
    let content = '\u00A0';
    if (props.showBalance) {
        content = <>{ formatter.format(props.amount) }</>
    }
    const buttonClass = 'btn ' + (props.showBalance ? 'btn-outline-warning' : 'btn-outline-light');
    const buttonClass1 = 'btn ' + 'btn-outline-success';
    return (
    <>
    <Balance> {content} </Balance>
        <Section>
             
            <BalanceToggleButton 
                onClick={props.handleBalanceToggle}
                className={buttonClass}>
                {buttonText}
            </BalanceToggleButton>
            <Button 
                onClick={props.handleAddBalance} 
                className={buttonClass1}>
                  Funnel $1200  <i class="fas fa-funnel-dollar"></i>
            </Button>
        </Section>
    </>
    );

}




AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}