/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import placeholder from '../../assets/byggern1.jpg'
import * as S from './styles'

const Byggern = () => {
  return (
        <S.MainWrapper>
                <S.ImageWrapper>
                    <img src={placeholder} />
                </S.ImageWrapper>

                <S.TextWrapper>
                    <h1> Byggern </h1>
                    <p>
                    Byggern is slang for the final project in the class <a href = "https://www.ntnu.edu/studies/courses/TTK4155/#tab=omEmnet"> Embedded and Industrial Computer Systems Design </a>
                    (say that out loud, fast, three times, and you’ll understand why we call it byggern). This project
                    involved designing, building, and programming a ping-pong game with a distributed, embedded control system.
                    <br></br><br></br>

                    The system consisted of two main components,
                    or two nodes if you will. Node 1 consisted of a breadboard
                    and a USB Multifunction board, and this is where we got good use of
                    most of our knowledge within electronics. The second node consisted of
                    an Arduino Due. Communication between these two nodes was enabled through
                    a CAN bus. The second node communicated with the game-board, while the
                    first node communicated with the player.
                    <br></br><br></br>

                    We also implemented a website for the display of scores, playing
                    fun game music, and keeping track of the traffic on the CAN bus. In
                    addition to this, one of our group members contributed with the drawing
                    of the entire Node 1 in Kicad, allowing us to use a printed PCB to
                    replace the god-awful mess of our breadboard.
                    <br></br><br></br>

                    Our project obtained the highest grade of 100%. Be sure to check out the <a href = "https://github.com/camilladybdal/byggern-1"> Github repository</a> if you want to <b>C</b> more ;)
                    </p>
                </S.TextWrapper>

        </S.MainWrapper>
  )
}

export default Byggern
