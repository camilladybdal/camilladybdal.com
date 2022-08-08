/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import placeholder from '../../assets/solution.png'
import styled from 'styled-components'
import * as S from './styles'

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;

    img{
        height: 15em;
    }
    @media (max-width: 730px) {
        img{
            height: 20em;
        }
    }
    
    @media (max-width: 390px) { // mobile
        img{
            width: 389px;
            height: auto;
        }
    }
`

const SolutionSeeker = () => {
  return (
        <S.MainWrapper>
                <ImageWrapper>
                    <img src={placeholder} />
                </ImageWrapper>

                <S.TextWrapper>
                    {/* <h1> Solution Seeker </h1> */}
                    <h3> Ongoing research project with NTNU and Solution Seeker on developing and testing new methods for Machine Learning based on Industrial data. </h3>

                    <p>
                    This summer I've been working on an exciting
                    project with Solution Seeker and NTNU, where I've gotten
                    the rare opportunity of taking a deep dive into deep neural networks
                    and researching how to exploit their properties for different applications in
                    the industry. I've spent time researching state-of-the-art architectures, as well as evaluating and testing them.
                    <br></br><br></br>

                    This experience was useful both in preparing me for my project and master
                    thesis and for gaining experience on how it is to work as a researcher.
                    I've read more articles this summer than I have in my entire life. By doing so,
                    I've gained useful insights into how to assess and compare machine learning methods,
                    and an overall better understanding of the statistics and mathematical formulations used in such methods.

                    I am looking forward to writing my project thesis on the same subject, along with great supervisors from Solution Seeker and NTNU.
                    You can read more about Solution Seeker
                    <a href = "https://www.solutionseeker.no/"> here. </a>

                    </p>
                </S.TextWrapper>

        </S.MainWrapper>
  )
}

export default SolutionSeeker
