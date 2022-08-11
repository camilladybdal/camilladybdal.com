/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import * as S from './styles'
import pic from '../assets/profilepic.png'
import linkedin from '../assets/linkedIn_circle.svg'
import github from '../assets/github.svg'
import instagram from '../assets/instagram.svg'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const Home = () => {
  return (
    <Container>
      <S.MainContainer>
            <S.AboutContainer>
              <div className = "textContainer">
                <h1>Camilla Dybdal</h1>
                <h2> Cybernetics and robotics student and Data Scientist</h2>
                <p>Welcome to my portfolio page!
                <br/>
                  I'm a passionate student with an above average
                   interest in innovation and learning new technologies.
                   I'm currently starting my 5th and final year of an integrated
                   masters degree in Cybernetics and Robotics at NTNU. Apart from studying,
                   I work part-time as an Atonomy Engineer at Clean Sea Solutions, where I am developing
                   a vision-system for their ocean drone. I also have experience from past internships and
                   personal projects.
                </p>
              </div>
              <div className = "socialMediaContainer">
                <a href = "https://www.linkedin.com/in/camilladybdal">
                <img src ={linkedin} ></img>
                </a>
                <a href = "https://github.com/camilladybdal">
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
      </Container>
  )
}

export default Home
