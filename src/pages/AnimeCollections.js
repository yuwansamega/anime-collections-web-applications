import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import AnimeCollectionCard from '../components/AnimeCollectionCard';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useEffect } from 'react';


const AnimeCollections = () => {

  const Wrapper = styled.div`
    height: fit-content;
    min-height: 50rem;
    width: 100%;
    background-color: #121212;
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;
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
  `;

  const TextContainer = styled.div`
    width: 100%;
    height: 5rem;
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Text = styled.h2`
    font-family: 'VT323', monospace;
    text-align: center;
    color: #F2F2F2;
    font-size: 2rem;
    opacity: 0.9;
    font-weight: 300;
  `;

  const {collections} = useContext(GlobalContext);

  return (
    <Wrapper>
      <WrapperContainer>
        <TextContainer>
          <Text>
            Anime Collections
          </Text>
        </TextContainer>
        <ContentContainer>
          {collections && collections.map(anime => {
            return (
              <AnimeCollectionCard key={anime.id} anime={anime} />
            )
          })}
        </ContentContainer>
      </WrapperContainer>
    </Wrapper>
  )
}

export default AnimeCollections