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
          <div className="textContainer">
            <h1>Camilla Dybdal</h1>
            <h2>AI Tech Lead & Machine Learning Engineer </h2>
            <p>
              Welcome to my portfolio!
              <br />
              I'm passionate about developing intelligent systems that make a real-world impact, particularly through AI.
              With a masters degree in Cybernetics and Robotics from NTNU and hands-on experience across industry and research, I enjoy building things that combine technical depth with creative problem-solving.
              <br /><br />
              I have experience leading AI initiatives and contributing to projects that span from autonomy and vision systems to applied machine learning in production environments.
              <br /><br />
              Feel free to explore my work and connect!
            </p>

          </div>
          <div className="socialMediaContainer">
            <a href="https://www.linkedin.com/in/camilladybdal">
              <img src={linkedin} ></img>
            </a>
            <a href="https://github.com/camilladybdal">
              <img src={github} ></img>
            </a>
            <a href="https://www.instagram.com/camildy/">
              <img src={instagram} ></img>
            </a>
          </div>
        </S.AboutContainer>
        <S.ImageContainer>
          <img src={pic} ></img>
        </S.ImageContainer>

      </S.MainContainer>
    </Container>
  )
}

export default Home
