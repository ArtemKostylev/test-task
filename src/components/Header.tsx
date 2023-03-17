import React from 'react';
import styled from 'styled-components';
import {MenuOutlined} from '@ant-design/icons';

const HeaderWrapper = styled.header`
  position: sticky;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #c0c0c0;
  width: 100%;
  
  span {
    width: 20%;
    text-align: center;
  }
`

const Logo = styled.span`
  text-transform: uppercase;
`;

const PageTitle = styled.span`
  color: coral;
`

export const Header = () => (
  <HeaderWrapper>
    <Logo>stock center</Logo>
    <PageTitle>items in stock</PageTitle>
    <MenuOutlined/>
  </HeaderWrapper>
)