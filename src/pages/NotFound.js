import styled from '@emotion/styled'
import React from 'react'

const NotFound = () => {

  const Wrapper = styled.div`
    width: 100%;
    min-height: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const TextContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    
  `;

  const Text = styled.h2`
    font-family: 'VT323', monospace;
    text-align: center;
    color: #F2F2F2;
    font-size: 3rem;
    opacity: 0.9;
    font-weight: 300;
    text-align: center;
  `;

  return (
    <Wrapper>
      <TextContainer>
          <Text>
            Opps!
          </Text>
          <Text>
            404 Page Not Found.
          </Text>
      </TextContainer>
    </Wrapper>
  )
}

export default NotFound