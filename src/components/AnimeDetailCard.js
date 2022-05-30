import React from 'react';
import { useAnimeDetail } from '../hooks/useAnimeDetail';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';

const AnimeDetailCard = () => {

  const CardContainer = styled.div`
    width: 80%;
    height: 25rem;
    background-color: rgba(56, 61, 59, 0.6);
    border-radius: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  `

  const {id} = useParams();

  const {data, loading, error} = useAnimeDetail(id);

  if(data){
    
    console.log(data);
  }
  return (
    <>
      
        { data && data.Page.media.map((anime) => {
          return (
            <CardContainer key={anime.idMal}>
              { anime.title.native}
            </CardContainer>
          )
        })}
      
    </>
  )
}

export default AnimeDetailCard