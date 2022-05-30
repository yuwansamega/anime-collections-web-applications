import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import AnimeCard from '../components/AnimeCard';
import { useAnime } from '../hooks/useAnime';



const Home = () => {

  const Wrapper = styled.div`
    height: fit-content;
    width: 100%;
    background-color: #121212;
    display: flex;
    justify-content: center;
  `;

  const WrapperContainer = styled.div`
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
  `;

  const ContentContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-top: 3rem;

  `

  const TextContainer = styled.div`
    width: 100%;
    height: 5rem;
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const Text = styled.h2`
    font-family: 'VT323', monospace;
    color: #fafafa;
    font-size: 2rem;
    opacity: 0.9;
    font-weight: 300;
  `

  const PaginateWrapper = styled.div`
    width: 80%;
    height: 3rem;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  `;


  const ButtonContainer = styled.div`
    width: 5rem;
    height: 3rem;
    background-color: red;
    display: flex;
    justify-content: center;
  `;

  const Button = styled.button`
    width: 100%;
    height: 100%;
    background-color: transparent;
    cursor: pointer;
    color: white;
  `
  
  const [currentPage, setCurrentPage] = useState(1);

  const  {data, loading, error} = useAnime(currentPage, 10);

  console.log(data);
    
  const handleNextButton = () => {
    setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
  }
  const handlePreviousButton = () => {
    setCurrentPage(prevCurrentPage => prevCurrentPage - 1);
  }

  const previousButtonDisabled = currentPage == 1 ? true : false;


  return (
    <Wrapper>
      <WrapperContainer>
        <TextContainer>
          <Text>
            Choose You Anime Collections!
          </Text>
        </TextContainer>

        <ContentContainer>
          {data && data.Page.media.map(anime => {
            return (
              <AnimeCard key={anime.id} anime={anime} />
            )
          })}
        </ContentContainer>

        {/* <PaginateWrapper>
          <ButtonContainer>
            <Button onClick={handlePreviousButton}
              disabled={previousButtonDisabled}>
                Previous
            </Button>
            <Button onClick={handleNextButton}>Next</Button>
          </ButtonContainer>
        </PaginateWrapper> */}
      </WrapperContainer>
    </Wrapper>
  )
}

export default Home