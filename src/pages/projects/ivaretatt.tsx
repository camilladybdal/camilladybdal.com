/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import placeholder from '../../assets/ivaretatt_page.png'
import * as S from './styles'
import styled from 'styled-components'

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;

    img{
        height: 25em;
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

const Ivaretatt = () => {
  return (
        <S.MainWrapper>
                <S.TextWrapper>
                    <h1> Ivaretatt </h1>

                    <p>
                    Ivaretatt is a StartUp company specializing in private delivery
                    of health services such as support contacts, traveling assistance,
                    and helping out nursing homes and other public services with staff.
                    I am hired as Technical Manager, and my responsibilities there include
                    design, development, and maintenance of their website, design of assets and
                    logos, setting up and managing IT systems such as mail and databases, and other various
                    tasks that pop up along the way. The website is made and hosted using Webflow, and I'm currently in
                    the process of rewriting it in Typescript/React. This is my mother's buisness, which has allowed me much freedom in my work.

                    <br></br><br></br>
                    You can read more about Ivaretatt <a href = "https://www.ivaretatt.no/"> here. </a>

                    </p>
                </S.TextWrapper>

                <ImageWrapper>
                    <img src={placeholder} />
                </ImageWrapper>

        </S.MainWrapper>
  )
}

export default Ivaretatt
