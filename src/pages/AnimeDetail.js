import React from 'react';
import styled  from '@emotion/styled';
import AnimeDetailCard from '../components/AnimeDetailCard';

const AnimeDetail = () => {

  const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  `

  const WrapperContainer = styled.div`
    width: 80%;
    height: fit-content;
    display: flex;
    justify-content: center;
  `

  return (
    <Wrapper>
      <WrapperContainer>
        <AnimeDetailCard />
      </WrapperContainer>
    </Wrapper>
  )
}

export default AnimeDetail