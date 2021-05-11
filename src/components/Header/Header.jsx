import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../logo.svg';

const Head = styled.header`
background-color: #282c34;
  min-height: 10rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 36px;
`;

const Img = styled.img`
height: 8rem;
pointer-events: none;
`;

const H1 = styled.h1`
font-size: 3rem;
line-height:8rem;
font-weight bold;
min width: 300px;
`;

export default class Header extends Component {
    render() {
        return (
            <Head>
           <Img src={logo} alt="React logo" />
            <H1>
              Coin Exchange 
            </H1>
          </Head>
        )
    }
}
