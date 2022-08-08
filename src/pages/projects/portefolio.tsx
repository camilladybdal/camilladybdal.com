/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import placeholder from '../../assets/dybdal.png'
import * as S from './styles'
import styled from 'styled-components'

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5rem;

    img{
        height: 20em;
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

const Portefolio = () => {
  return (
        <S.MainWrapper>
                <ImageWrapper>
                    <img src={placeholder} />
                </ImageWrapper>

                <S.TextWrapper>
                    <h1> Personal Portefolio Page </h1>

                    <p>
                    You are most likely already a little bit familiar with this project,
                    as you are currently looking right at it. I created a portfolio page to display some of my projects,
                    and also to practice my web-development skills. This website is made with love, lots of yellow, and also
                    a little bit of React, TypeScript, and CSS for beautification.

                    Feel free to look at the  <a href = "https://github.com/camilladybdal/camilladybdal.com"> Github repository</a> for this project if you are curious as to how I made the beautiful hamburger menu 😀

                    </p>
                </S.TextWrapper>

        </S.MainWrapper>
  )
}

export default Portefolio
