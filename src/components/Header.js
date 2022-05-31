import React from 'react';
import styled from '@emotion/styled';
import {Link, NavLink} from 'react-router-dom';

const Header = () => {

  const Wrapper = styled.div`
    width: 100%;
    height: 5rem;
    background-color: rgba(242, 242, 242, 0.05);
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
    
  `

  const StyledNavLink = styled(NavLink)`
    color: #F2F2F2;
    font-size: 1.25rem; 
    font-family: 'VT323', monospace;
    &:hover {
      color: #f0abfc;
    }
    &.active{
      color: #f0abfc;
    }
  `;

  const StyledBrandLink = styled(NavLink)`
  color: #F2F2F2;
  font-weight: 500;
  font-family: 'Press Start 2P', cursive;
  &:hover {
    color: #f0abfc;
  }
  &.active{
    color: #f0abfc;
  }
  `

  return (
    
    <Wrapper>
      <WrapperContainer>
        <StyledBrandLink to='/'>
          Animoo
        </StyledBrandLink>
        <StyledNavLink to={`/anime-collections`}>
          Collections
        </StyledNavLink>
      </WrapperContainer>
    </Wrapper>
  )
}

export default Header