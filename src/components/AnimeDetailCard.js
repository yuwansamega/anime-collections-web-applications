import React from 'react';
import { useAnimeDetail } from '../hooks/useAnimeDetail';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import 'animate.css';

const AnimeDetailCard = () => {

  const CardWrapper = styled.div`
    width: 80%;
    height: fit-content;
    background-color: rgba(242, 242, 242, 0.05);
    border-radius: 0.25rem;
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;
    animation: fadeInUp; 
    animation-duration: 1s;
  `;

  const CardContainer = styled.div`
    width: 90%;
    height: fit-content;
    display: flex;
    flex-direction: column;
  `;

  const BannerContainer = styled.div`
    width: 100%;
    height: fit-content;
    margin-top: 3rem;

    
  `

  const Banner = styled.img`
    width: 100%;
    height: 100%;
    opacity: 0.9;
    border-radius: 0.25rem;
  `;

  const Title = styled.div`
    margin-top: 2rem;
    color: #f2f2f2;
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    text-decoration-line: underline;
    text-underline-offset: 3px;
    text-decoration-color: #f0abfc;
  `

  const Desc = styled.div`
    margin-top: 1rem;
    color: #f2f2f2;
    text-align: justify;
    opacity: .87;
    font-family: 'VT323', monospace;
    font-size: 1.2rem;
  `

  const InfoContainer = styled.div`
    margin-top: 2rem;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    row-gap: 7px;
  `

  const Label = styled.div`
    text-transform: uppercase;
    color: #f0abfc;
    font-family: 'Press Start 2P', cursive;
    font-size: 0.6rem;
    opacity: .87;
  `

  const Text = styled.div`
    color: #f2f2f2;
    opacity: .87;
    font-family: 'VT323', monospace;
    font-size: 1.2rem;
    letter-spacing: 0.025em;
  `;

  const {id} = useParams();

  const {data, loading, error} = useAnimeDetail(id);

  return (
    <>
      
        { data && data.Page.media.map((anime) => {
          return (
            <CardWrapper key={anime.id}>
              <CardContainer>
                <BannerContainer>
                  <Banner src={anime.bannerImage} />
                </BannerContainer>
                <Title>
                  {anime.title.native}
                </Title>
                <Desc>
                  {anime.description.replace('<br><br>', '')}
                </Desc>
                <InfoContainer>
                  <Label>
                    Type
                  </Label>  
                  <Text>
                    {anime.type}
                  </Text>
                </InfoContainer>
                <InfoContainer>
                  <Label>
                    Season
                  </Label>  
                  <Text>
                    {anime.season}
                  </Text>
                </InfoContainer>
                <InfoContainer>
                  <Label>
                    Status
                  </Label>  
                  <Text>
                    {anime.status}
                  </Text>
                </InfoContainer>
                <InfoContainer>
                  <Label>
                    Year
                  </Label>  
                  <Text>
                    {anime.startDate.year} - {anime.endDate.year}
                  </Text>
                </InfoContainer>
                {anime.type == 'ANIME' && (
                <>
                  <InfoContainer>
                    <Label>
                      Episodes
                    </Label>  
                    <Text>
                      {anime.episodes}
                    </Text>
                  </InfoContainer>
                  <InfoContainer>
                    <Label>
                      Duration
                    </Label>  
                    <Text>
                      {anime.duration} Min
                    </Text>
                  </InfoContainer>
                </> 
                )}
                {anime.type == 'MANGA' && (
                <>
                  <InfoContainer>
                    <Label>
                      Chapters
                    </Label>  
                    <Text>
                      {anime.chapters}
                    </Text>
                  </InfoContainer>
                  <InfoContainer>
                    <Label>
                      Volumes
                    </Label>  
                    <Text>
                      {anime.volumes} Min
                    </Text>
                  </InfoContainer>
                </> 
                )}
                <InfoContainer>
                  <Label>
                    Score
                  </Label>  
                  <Text>
                    {anime.averageScore} / 100
                  </Text>
                </InfoContainer>
              </CardContainer>
            </CardWrapper>
          )
        })}
      
    </>
  )
}

export default AnimeDetailCard