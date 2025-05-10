/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import * as S from './styles'
import placeholder from '../../assets/cleansea_present.png'

const CleanSeaSolutions = () => {
  return (
    <S.MainWrapper>
        <S.ImageWrapper>
            <img src={placeholder} />
        </S.ImageWrapper>
      <S.TextWrapper>
        <h1>Computer Vision Engineer at Clean Sea Solutions</h1>
        <p>
          As a Computer Vision Engineer at <a href="https://www.cleanseasolutions.no/">Clean Sea Solutions</a>,
          I worked on developing the vision system for their autonomous ocean cleanup drone. The goal was to
          enable real-time marine debris detection using a fast and efficient computer vision pipeline.
          <br /><br />
          My work focused on:
          <br /><br />
          • Experimenting with and benchmarking various computer vision models for trash detection
          <br />
          • Training and evaluating models tailored to the challenges of the marine environment
          <br />
          • Prioritizing real-time inference and optimizing lightweight models for deployment
          <br />
          • Supporting integration with the drone's navigation and control systems
          <br /><br />
          The project required balancing theoretical understanding with practical implementation,
          ensuring that the system could perform reliably in dynamic and unpredictable conditions at sea.
          <br /><br />
          This experience gave me valuable insights into building production-ready computer vision systems
          capable of robust, real-time performance in the real world.
        </p>
      </S.TextWrapper>
    </S.MainWrapper>
  )
}

export default CleanSeaSolutions
