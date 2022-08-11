import React from 'react'
import styled from 'styled-components'
import cisco from '../assets/cisco.png'
import mobai from '../assets/mobai.png'
import solution from '../assets/solution.png'
import ether from '../assets/ether.png'
import go from '../assets/go.png'
import potet from '../assets/potet.png'
import ivaretatt from '../assets/ivaretatt.png'
import dybdal from '../assets/dybdal.png'
import byggern from '../assets/byggern2.png'
import bj from '../assets/bj.png'
import tensorflow from '../assets/tensorflow.png'
import { NavLink } from 'react-router-dom'
import gren from '../assets/gren.png'

const Project = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    border-style: solid;    
    border-width: 2px;
    border-color: grey;
    border-radius: 0.75rem;
    overflow: hidden;
    padding: 1em;
    width : 20rem;
    height : 30rem;
        
    img {
        height: 8rem;
        position: relative;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    h2 {
        font-weight: bold;
    }
    
    p {
        font-weight: 400;
        color: grey;
        margin: 1rem;
    }
    li{
        background-color:#FFE194;
        color: white;
        padding: 15px 32px;
        border: none;
        text-align: center;
        display: inline-block;
        font-size: 1em;
    }
    @media (max-width: 900px) {
        img {
          height: 5rem;
      }

    }
`

const FlexWrapper = styled.div`
    margin-top: 2em;
    margin-bottom: 2em;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    
    justify-content: center;
    align-items: flex-start;
`
const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'M PLUS Rounded 1c', sans-serif;

    p {
      text-align: center;
    }

`

const Projects = () => {
  return (
    <div>
      <TextWrapper>
      <h1>Projects</h1>
      <p>Here you can find a selection of my projects! Some are school or hobby related, while others are from internships. <br></br>
        Be sure to read more if you find them interesting!
      </p>
      </TextWrapper>

    <FlexWrapper>
        <Project>
          <div>
            <img src={solution} />
          </div>
          <div>
            <h2> Solution Seeker | NTNU </h2>
            <p> Currently working on a research project with Solution Seeker and NTNU,
              on developing and testing new methods for Machine Learning based on industrial time-series.
              <br></br><br></br>
              <b>PyTorch</b> | <b> Python </b> | <b> Dash </b>
            </p>

            <NavLink to="projects/solutionseeker">
            <li>Read more</li>
          </NavLink>

          </div>
        </Project>
        <Project>
          <div>
            <img src={cisco} />
          </div>
          <div>
            <h2> Cisco Webex </h2>
            <p> Design and development of a full-stack
                web-based whiteboard application. This project was done as part of
                a summer internship at Cisco Norway. <br></br><br></br>
                <b>Typescript</b> | <b>React</b> | <b>Redux</b> | <b>AWS</b>.
            </p>
            <NavLink to="projects/cisco">
            <li>Read more</li>
          </NavLink>
          </div>
        </Project>
        <Project>
          <div>
            <img src={mobai} />
          </div>
          <div>
            <h2> Mobai | BearingPoint</h2>
            <p> Worked on developing a ML pipeline for the facial recognition
              startup company Mobai. This project was done as part of a Winter Internship at
              BearingPoint in Oslo.
              <br></br><br></br>
              <b>C++</b> | <b> openCV </b> | <b> Python</b> | <b>TensorFlow</b>
            </p>
            <NavLink to="projects/mobai">
            <li>Read more</li>
          </NavLink>
          </div>
        </Project>
        <Project>
          <div>
            <img src={ether} />
          </div>
          <div>
            <h2> NFT-Marketplace  </h2>
            <p> Project involved building a full-stack NFT-Marketplace application for minting, listing, selling and buying NFT.
              <br></br><br></br>
              <b>Solidity</b> | <b> Hardhat </b> | <b> Ethers</b> | <b>Polygon</b>
              <b> Infura</b> | <b>IPFS</b> | <b>Typescript</b> | <b>React</b>
            </p>
            <NavLink to="projects/nft">
            <li>Read more</li>
          </NavLink>
          </div>
        </Project>
        <Project>
          <div>
            <img src={dybdal} />
          </div>
          <div>
            <h2> camilladybdal.com </h2>
            <p> Personal portefolio website
              <br></br><br></br>
              <b>Typescript</b> | <b> React </b>
            </p>
            <NavLink to="projects/portefolio">
            <li>Read more</li>
          </NavLink>
          </div>
        </Project>
        <Project>
          <div>
            <img src={ivaretatt} />
          </div>
          <div>
            <h2> Ivaretatt.no </h2>
            <p> Design and development of website and company assets
              <br></br><br></br>
              <b>Webflow</b> | <b> Adobe Illustrator </b>
            </p>
            <NavLink to="projects/ivaretatt">
            <li>Read more</li>
          </NavLink>
          </div>
        </Project>
        <Project>
          <div>
            <img src={byggern} />
          </div>
          <div>
            <h2> Byggern </h2>
            <p> Embedded systems project on building a ping-pong machine using
              several nodes, breadboard, aurdriono, motors and other components.
              <br></br><br></br>
              <b>C</b> | <b> Arduino </b>
            </p>
            <NavLink to="projects/byggern">
            <li>Read more</li>
          </NavLink>
          </div>
        </Project>
        <Project>
          <div>
            <img src={bj} />
          </div>
          <div>
            <h2> Blackjack RL Agent </h2>
            <p> Project on developing a blackjack agent using reinforcement learning.
              <br></br><br></br>
              <b>Python</b> | <b> Tensorflow </b>
            </p>
            <NavLink to="projects/blackjack">
            <li>Read more</li>
          </NavLink>
          </div>
        </Project>
        <Project>
          <div>
            <img src={tensorflow} />
          </div>
          <div>
            <h2> Russian Translator</h2>
            <p> Implemented a deep learning Russian-to-English translator.
              <br></br><br></br>
              <b>Python</b> | <b> Keras/Tensorflow </b>
            </p>
            <NavLink to="projects/translator">
            <li>Read more</li>
          </NavLink>
          </div>
        </Project>
        <Project>
          <div>
            <img src={go} />
          </div>
          <div>
            <h2> Real-Time Programming </h2>
            <p> Group project on developing a robust system with multiple
              elevators communicating over a network.
              <br></br><br></br>
              <b>Go</b> | <b> UDP </b>
            </p>
            <NavLink to="projects/realtime">
            <li>Read more</li>
          </NavLink>
          </div>
        </Project>
        <Project>
          <div>
            <img src={potet} />
          </div>
          <div>
            <h2> Cleaning Robot </h2>
            <p> Project in Mobile Robotics.
              <br></br><br></br>
              <b>C</b> | <b> ROS </b> | <b> RVIZ </b> | <b> SLAM </b>
            </p>
            <NavLink to="projects/cleaningrobot">
            <li>Read more</li>
          </NavLink>
          </div>
        </Project>

        <Project>
          <div>
            <img src={gren} />
          </div>
          <div>
            <h2> GrEn </h2>
            <p> I was project manager for Start NTNUs GrEn in 2020.
              <br></br><br></br>
              <b> Poeple skills</b> | <b> Teamwork </b> | <b> Communication </b>
            </p>
            <NavLink to="projects/gren">
            <li>Read more</li>
          </NavLink>
          </div>
        </Project>

    </FlexWrapper>
    </div>
  )
}

export default Projects
