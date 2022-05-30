import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import AnimeCollectionCard from '../components/AnimeCollectionCard';
import styled from '@emotion/styled';


const AnimeCollections = () => {

  const Wrapper = styled.div`
    height: fit-content;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  `;

  const WrapperContainer = styled.div`
    width: 80%;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  `;

  const {collections} = useContext(GlobalContext);

  return (
    <Wrapper>
      <WrapperContainer>
        {collections && collections.map(anime => {
          return (
            <AnimeCollectionCard key={anime.id} anime={anime} />
          )
        })}
      </WrapperContainer>
    </Wrapper>
  )
}

export default AnimeCollections