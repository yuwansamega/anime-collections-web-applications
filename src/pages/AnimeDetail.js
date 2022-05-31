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
    min-height: 40rem;
  `

  const WrapperContainer = styled.div`
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  const TextContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
  `;

  const Text = styled.div`
    font-family: 'VT323', monospace;
    text-align: center;
    color: #F2F2F2;
    font-size: 2rem;
    opacity: 0.9;
    font-weight: 300;
  `

  const ContentContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  `

  return (
    <Wrapper>
      <WrapperContainer>
        <TextContainer>
          <Text>
            Anime Info
          </Text>
        </TextContainer>
        <ContentContainer>
          <AnimeDetailCard />
        </ContentContainer>
      </WrapperContainer>
    </Wrapper>
  )
}

export default AnimeDetail