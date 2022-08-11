/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import placeholder from '../../assets/about_internship.png'
import * as S from './styles'

const Cisco = () => {
  return (
        <S.MainWrapper>
                <S.ImageWrapper>
                    <img src={placeholder} />
                </S.ImageWrapper>

                <S.TextWrapper>
                    <h1> Cisco Webboard Solution </h1>
                    <p>
                    In my summer internship in 2021, I got the opportunity to work for 9 weeks on a web-based whiteboard solution for Cisco Webex.
                    We started the project from scratch to create a collaboration tool, which, unlike their present tool, wouldn't be
                    too much based on drawing but instead on features like flow charts, sticky notes, and reactions.

                    <br></br> <br></br>

                    The entire project was implemented in Typescript and React,
                    with tests written using React Testing Library. We used Redux to keep track
                    of the state, and the backend was serverless, based on lambdas, in AWS. We used the backend to enable
                    multiple users to collaborate on the Webboard simultaneously, to keep track of which user added new content,
                    and to save the content in AWSs' DynamoDB.

                    <br></br> <br></br>

                    This project was meant to be a proof of concept for Cisco. I am glad to see that even though Cisco ended
                    up using Miro (who has a similar solution to the one we implemented), the summer interns of 2022 are continuing our work.
                    You can read more about Cisco webex
                    <a href = "https://www.webex.com/"> here. </a>

                    </p>
                </S.TextWrapper>

        </S.MainWrapper>
  )
}

export default Cisco
