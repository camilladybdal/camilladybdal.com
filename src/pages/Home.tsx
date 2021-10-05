/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import * as S from './styles'
import pic from '../assets/profilepic.png'
import linkedin from '../assets/linkedIn_circle.svg'
import github from '../assets/github.svg'
import instagram from '../assets/instagram.svg'
import Footer from '../components/Footer'

const Home = () => {
  return (

      <S.MainContainer>
         <S.GlobalStyle/>

            <S.AboutContainer>
              <div className = "textContainer">
                <h1>Camilla Dybdal</h1>
                <p>Passionate student with an above average interest in innovation and learning new technologies.
                <br/><br/>
                Skilled in C, C++, Python and Go. Currently studying Cybernetics and Robotics at the Norwegian
                University of Science and Technology (NTNU).Passionate student with an above average interest in innovation and learning new technologies.
                Passionate student with an above average interest in innovation and learning new technologies.
                Passionate student with an above average interest in innovation and learning new technologies.
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
            <Footer/>

        </S.MainContainer>

  )
}

export default Home
