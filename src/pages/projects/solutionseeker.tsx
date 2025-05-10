/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import placeholder from '../../assets/solution.png'
import styled from 'styled-components'
import * as S from './styles'

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  img {
    height: 15em;
  }

  @media (max-width: 730px) {
    img {
      height: 20em;
    }
  }

  @media (max-width: 390px) {
    img {
      width: 389px;
      height: auto;
    }
  }
`

const SolutionSeeker = () => {
  return (
    <S.MainWrapper>
      <ImageWrapper>
        <img src={placeholder} alt="Solution Seeker Project" />
      </ImageWrapper>

      <S.TextWrapper>
        <h3>
          Collaborative research project with NTNU and Solution Seeker, focused on developing and evaluating new machine learning methods for industrial data.
        </h3>

        <p>
          During the summer of 2022, I had the opportunity to work on an applied research project with Solution Seeker and NTNU.
          The goal was to explore and test new machine learning techniques tailored to industrial time-series data.
          <br /><br />
          My work involved reviewing state-of-the-art deep learning architectures, training and evaluating models, and analyzing their performance
          in real-world industrial scenarios. This experience gave me valuable hands-on exposure to advanced machine learning concepts
          and the practical considerations of applying them in a research setting.
          <br /><br />
          The project not only helped prepare me for my project and master’s thesis but also gave me a better understanding of
          how to critically assess and compare ML methods from a scientific perspective. I collaborated closely with both academic and industry supervisors,
          and read more research papers in one summer than ever before.
          <br /><br />
          You can learn more about Solution Seeker <a href="https://www.solutionseeker.no/">here</a>.
        </p>
      </S.TextWrapper>
    </S.MainWrapper>
  )
}

export default SolutionSeeker
