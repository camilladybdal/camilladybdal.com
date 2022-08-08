/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import placeholder from '../../assets/fcpp.png'
import * as S from './styles'

const Cleaningrobot = () => {
  return (
        <S.MainWrapper>
                <S.ImageWrapper>
                    <img src={placeholder} />
                </S.ImageWrapper>

                <S.TextWrapper>
                    <h1> Cleaning Robot </h1>
                    <p>
                    The objective of this project was to develop an
                    autonomous mobile robot, which would drive about an unknown
                    territory and disinfect the area with a simulated UV-light. We had a
                    physical robot to play with, but most of the implementation and testing was done in a
                    simulated environment (Gazebo and RVIZ).
                    <br></br><br></br>

                    The robot, named Potet, had to solve multiple partial tasks in order to become autonomous.
                    The tasks included creating a map of the environment and positioning in the map, reaching a
                    set of goals contained in a text-file, and path planning for the UV-covering of the environment.
                    For mapping and positioning we used a SLAM algorithm package from ROS called “gmapping”, and another
                    package for exploration called “explore lite”.  For the main part of the task, namely the path planning,
                    we used a Full Coverage Path Planning (FCPP) algorithm, with a path following controller to track the moving goal.
                    <br></br><br></br>

                    The project was performed in a team of 2 people, and it was the final project
                    in the class “Autonomous and Mobile Robotics” at the University of Bologna, and we
                    obtained the highest grade of “30 con Lode”.  The ROS modules was written in C++,
                    and the robot we used was a “TurtleBot3 burger” variant. If you're interested, you can
                    have a closer look at the implementation details <a href = "https://github.com/camilladybdal/ROS-UV-Cleaning-Robot"> here.</a>
                    </p>
                </S.TextWrapper>

        </S.MainWrapper>
  )
}

export default Cleaningrobot
