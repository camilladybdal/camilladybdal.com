/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import placeholder from '../../assets/bj_strategy.png'
import * as S from './styles'

const Blackjack = () => {
  return (
        <S.MainWrapper>
                <S.ImageWrapper>
                    <img src={placeholder} />
                </S.ImageWrapper>

                <S.TextWrapper>
                    <h1> Blackjack </h1>
                    <p>
                    Blackjack is a popular casino game, in which the objective is to get a
                    better hand than the dealer without busting. The goal of this project
                    was to investigate and compare two different Reinforcement learning
                    techniques for approximating the optimal strategy. Determining this strategy
                    isn't trivial, due to Blackjacks' stochastic nature. Reinforcement learning
                    approaches have proven to be very effective in stochastic environments, and
                    especially in Blackjack, as they can exploit the games' inherent reward structure.
                    This was the final project in the course "Autonomous and Adaptive Systems" at the
                    University of Bologna, and explored using Q-learning and Deep Q-learning for approximating the
                    optimal strategy.

                    <br></br><br></br>

                    I wrote a report summarizing the project, which can be found in the <a href = "https://github.com/camilladybdal/RL_Blackjack"> Github repository</a> if you're
                    interested in further reading and seeing the results. The project was implemented using python and Keras.

                    </p>
                </S.TextWrapper>

        </S.MainWrapper>
  )
}

export default Blackjack
