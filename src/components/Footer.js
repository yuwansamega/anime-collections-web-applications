import styled from '@emotion/styled'
import React from 'react'

const Footer = () => {

  const Wrapper = styled.div`
    width: 100%;
    height: 5rem;
    margin-top: 3rem;
    background-color: rgba(242, 242, 242, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const CustomText = styled.h2`
    font-size: 1rem;
    color: #f0abfc;
    opacity: 0.9;
  `

  const Text = styled.h2`
    font-size: 1.25rem;
    font-family: 'VT323', monospace;
    font-weight: 300;
    color: #f2f2f2;
  `
  const Span = styled.span`
    color: #f0abfc;
    margin-right: 0.5rem;
  `
  return (
    <Wrapper>
      <Text>
        <Span>
          Yuwan Samega
        </Span>
         Made With 💜 &copy; 2022 | All Right Reserved;
      </Text>
    </Wrapper>
  )
}

export default Footer