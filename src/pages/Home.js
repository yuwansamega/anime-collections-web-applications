import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import AnimeCard from '../components/AnimeCard';
import { useAnime } from '../hooks/useAnime';
import GridLoader from "react-spinners/GridLoader";



const Home = () => {

  const Wrapper = styled.div`
    height: fit-content;
    min-height: 70rem;
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
    text-align: center;
    color: #F2F2F2;
    font-size: 2rem;
    opacity: 0.9;
    font-weight: 300;
  `

  const PaginateContainer = styled.div`
    width: 100%;
    height: 4rem;
    column-gap: 1rem;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const ButtonContainer = styled.div`
    width: 4rem;
    height: 2.5rem;
    background-color: rgb(18,18,18);
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Button = styled.button`
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    color: #F2F2F2;
    border: 1px solid;
    opacity: 87%;
    border-color: rgba(250,250,250, 0.8);
    border-radius: 0.15rem;
    &:hover{
      cursor: pointer;
    }
    &:disabled {
      cursor: default;
      opacity: 38%;
    }
  `;

  const LoadingContainer = styled.div`
    width: 100%;
    margin-top: 17rem;
    display: flex;
    justify-content: center;
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

        {loading ? 
          <LoadingContainer>
            <GridLoader size={15} color={"#f0abfc"} />
          </LoadingContainer> 
          : <div></div>}

        <ContentContainer>
          {data && data.Page.media.map(anime => {
            return (
              <AnimeCard key={anime.id} anime={anime} />
            )
          })}
        </ContentContainer>

        <PaginateContainer>
          {data ? 
          (<>
            <ButtonContainer>
              <Button 
              onClick={handlePreviousButton}
              disabled={previousButtonDisabled}>
                Previous
              </Button>
            </ButtonContainer>
            <ButtonContainer>
              <Button 
              onClick={handleNextButton}>
                Next
              </Button>
            </ButtonContainer>
          </>) : <div></div>}
        </PaginateContainer>

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