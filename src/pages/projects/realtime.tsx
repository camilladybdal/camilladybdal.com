/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import placeholder from '../../assets/realtime.png'
import * as S from './styles'

const Realtime = () => {
  return (
        <S.MainWrapper>
                <S.ImageWrapper>
                    <img src={placeholder} />
                </S.ImageWrapper>

                <S.TextWrapper>
                    <h1> Real-time elevator project  </h1>
                    <p>
                    You can't go through 5 years of Cybernetics and Robotics without having to
                    do some real-time programming along the way. In this project, we worked
                    in a group of 3 poeple in order to implement an elevator system,
                    where  communication between the elevators were the main focus. The project is
                    written in Go, which in addition to having a very cute mascot, allowed us to use
                    new techniques such as message passing and channels instead of the traditional shared memory.

                    <br></br><br></br>

                    We  solved the project by creating a Finite State Machine (fsm-module) that handles the
                    logic of executing orders for a single elevator. The FSM handles fault tolerance logic
                    for a single elevator such as motorstop, obstruction and loading and saving cab-orders to
                    file in case of system crash. An OrderDistributer module was implemented to handle the
                    interaction between the elevators. It communicates with the other elevators using the
                    Network-module, and decides which elevator should take an order by using the costfunction-module.

                    <br></br><br></br>

                    We obtained a score of 94% on the code quality, and a 100% on the Factory Acceptance Test,
                    totaling in an A on the project. If you're interested in looking at the project in detail,
                    you can find the github repository <a href = "https://github.com/camilladybdal/evevator-TTK4145"> here.</a>

                    </p>
                </S.TextWrapper>

        </S.MainWrapper>
  )
}

export default Realtime
