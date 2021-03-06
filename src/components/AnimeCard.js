import styled from '@emotion/styled';
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import 'animate.css';
import Swal from 'sweetalert2'

const AnimeCard = ({anime}) => {

  const CardContainer = styled.div`
    background-color: rgba(242, 242, 242, 0.05);
    width: 14rem;
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    
    animation: fadeIn; 
    animation-duration: 800ms;
  `;

  const TextContainer = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
  `;

  const Text = styled.h2`
    font-family: 'VT323', monospace;
    color: #fafafa;
    font-size: 0.8rem;
    opacity: 87%;

  `

  const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  `;

  const Image = styled.img`
    width: 100%;
    height: 17rem;
    opacity: 0.9;
  `;

  const ButtonContainer = styled.div`
    width: 80%;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 1rem;
  `

  const Button = styled.button`
    
    background-color: rgba(18,18,18, 0.3);
    width: 100%;
    height: 100%;
    font-family: 'VT323', monospace;
    color: rgb(25, 191, 111);
    font-size: 1.15rem;
    border-radius: 0.15rem;
    border: 1px solid;
    border-color: rgb(25, 191, 111);
    &:hover {
      color: #f2f2f2;
      background-color: rgb(25, 191, 111);
      border: none;
      cursor: pointer;
    }
    &:disabled {
      color: #f2f2f2;
      opacity: 38%;
      background-color: rgba(18,18,18, 0.3);
      color: rgb(25, 191, 111);
      border: 1px solid;
      border-color: rgb(25, 191, 111);
      cursor: default;
    }
  `;

  const NavLink = styled(Link)`
    width: 100%;
    height: 100%;
  `;

  const Toast = () => {
    Swal.fire({
      toast: true,
      color: '#f2f2f2',
      background: '#1d1d1d',
      position: 'top-end',
      showConfirmButton: false,
      timer: 1200,
      icon: 'success',
      iconColor: '#f0abfc',
      titleText: 'Success added to collections!'
    });
  }

    const { addAnimeToCollections, collections } = useContext(GlobalContext);
    
    let storedAnime = collections.find(o => o.id === anime.id);

    const collectionsDisabled = storedAnime ? true : false;
    
    
  return (

      <CardContainer>
        <NavLink to={`/anime-detail/${anime.id}`}>
          <TextContainer>
            <Text>
              {anime.title.native}
            </Text>
          </TextContainer>
          <ContentContainer>
            <Image src={anime.coverImage.large} alt={anime.title.native} />
          </ContentContainer>
        </NavLink>
        <ButtonContainer>
          <Button 
          onClick={() => {
            addAnimeToCollections(anime);
            Toast();}}
          disabled={collectionsDisabled}>
            Collect
          </Button>
        </ButtonContainer>
      </CardContainer>
  )
}

export default AnimeCard