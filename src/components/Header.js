import React from 'react';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';

const Header = () => {

  const Wrapper = styled.div`
    width: 100%;
    height: 5rem;
    background-color: rgba(250, 250, 250, 0.05);
    display: flex;
    justify-content: center;
    align-items: centers;
  `

  const WrapperContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  `

  const BrandName = styled.div`
    color: #F2F2F2;
    font-weight: 500;
    font-family: 'Press Start 2P', cursive;
    &:hover {
      color: #f0abfc;
    }
  `

  const NavItem = styled.div`
    color: #F2F2F2;
    font-size: 1.25rem; 
    font-family: 'VT323', monospace;
    &:hover {
      color: #f0abfc;
    }
  `

  return (
    
    <Wrapper>
      <WrapperContainer>
        <Link to='/'>
          <BrandName>Animoo</BrandName>
        </Link>
        <Link to={`/anime-collections`}>
          <NavItem>Collections</NavItem>
        </Link>
      </WrapperContainer>
    </Wrapper>
  )
}

export default Header