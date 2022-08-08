/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import placeholder from '../../assets/about_start.png'
import * as S from './styles'

const Gren = () => {
  return (
        <S.MainWrapper>
                <S.ImageWrapper>
                    <img src={placeholder} />
                </S.ImageWrapper>

                <S.TextWrapper>
                    <h1> Project Manager - GrEn </h1>
                    <p>
                    We live in a world that is constantly changing, and in the
                    future, economic growth must take place with much lower climate
                    emissions than what we see today. This requires smart and innovative solutions.
                    GrEn stands for Green Entrepreneurship, with a focus on just that. I was the project
                    manager of GrEn in 2020, and along with 4 project members, we worked at showing students
                    at NTNU how sustainability can be both exciting and profitable.

                    <br></br><br></br>

                    We started the year with big plans, which unfortunately we had to make many changes to
                    along the way. You are probably also familiar with the pandemic hitting at the beginning of
                     2020, taking event planning off the agenda both for students and the companies we had partnered
                     up with. In addition to this, the restrictions seemed to change daily, making event planning extremely
                     challenging. However, despite all this, we pushed through and manage to host an amazing event with several partners,
                     and with 90 participants!
                    </p>
                </S.TextWrapper>

        </S.MainWrapper>
  )
}

export default Gren
