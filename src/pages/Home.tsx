/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import * as S from './styles'
import pic from '../assets/profilepic.png'
import linkedin from '../assets/linkedIn_circle.svg'
import github from '../assets/github.svg'
import instagram from '../assets/instagram.svg'

const Home = () => {
  return (

      <S.MainContainer>
         {/* <S.GlobalStyle/> */}

            <S.AboutContainer>
              <div className = "textContainer">
                <h1>Hi! I'm Camilla Dybdal</h1>
                <p>Welcome to my portfolio page!
                <br/><br/>
                  I’m a passionate student with an above average
                   interest in innovation and learning new technologies.
                   I’m currently on my 4th year of an integrated
                   masters degree in Cybernetics and Robotics at NTNU.
                   I am particularly interested in machine learning,
                   autonomous systems and blockchain technology.
                </p>
              </div>
              <div className = "socialMediaContainer">
                <a href = "https://www.linkedin.com/in/camilladybdal">
                <img src ={linkedin} ></img>
                </a>
                <a href = "https://github.com/camzillaD">
                <img src ={github} ></img>
                </a>
                <a href = "https://www.instagram.com/camildy/">
                <img src ={instagram} ></img>
                </a>
              </div>
            </S.AboutContainer>

            <S.ImageContainer>
              <img src = {pic} ></img>
            </S.ImageContainer>

        </S.MainContainer>

  )
}

export default Home
