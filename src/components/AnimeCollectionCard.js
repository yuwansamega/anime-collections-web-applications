import React, {useContext} from 'react';
import styled from '@emotion/styled';
import { GlobalContext } from '../context/GlobalState';

const AnimeCollectionCard = ({anime}) => {

  const CardContainer = styled.div`
    background-color: white;
    width: 13rem;
    height: 15rem;
    color: black;
    display: flex;
    flex-direction: column;
  `;

  const TextContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const ButtonContainer = styled.div`
    width: 100%;
    height: 3rem;
    background-color: rgb(217, 48, 73);
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: rgba(217, 48, 73, 0.8)
    
  `

  const Button = styled.button`
    background-color: transparent;
    width: 100%;
    height: 100%;
    border: none;
    cursor: pointer;
  `

  const { removeAnimeFromCollections } = useContext(GlobalContext);

  return (
    <CardContainer>
      <TextContainer>
        {anime.title.native}
      </TextContainer>
      <ButtonContainer>
        <Button onClick={() => {
          removeAnimeFromCollections(anime.id)
        }}>
          Remove
        </Button>
      </ButtonContainer>
    </CardContainer>
  )
}

export default AnimeCollectionCard