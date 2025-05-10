/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import * as S from './styles'
import placeholder from '../../assets/present_resolve.png'

const Resolve = () => {
  return (
    <S.MainWrapper>
        <S.ImageWrapper>
            <img src={placeholder} />
        </S.ImageWrapper>

      <S.TextWrapper>
        <h1>AI Tech Lead at Visma Resolve</h1>
        <p>
          As AI Tech Lead at <a href="https://resolve.visma.com/product/payroll-detect">Visma Resolve</a>,
          I lead the end-to-end design, development, and delivery of advanced AI products. Payroll Detect
          leverages cutting-edge AI to revolutionize payroll processing and validation.
          <br /><br />

          My role encompasses multiple key responsibilities:
          <br /><br />
          • Leading the development and implementation of machine learning algorithms and AI solutions
          <br />
          • Overseeing cloud architecture design to ensure robust and scalable systems
          <br />
          • Managing the technical roadmap for AI initiatives
          <br />
          • Collaborating with Product Management to align technical solutions with business objectives
          <br /><br />

          A significant focus of my work involves developing innovative AI solutions that enhance
          payroll processing efficiency and accuracy. This includes implementing advanced machine
          learning models, designing scalable cloud architectures, and ensuring our AI systems
          meet the highest standards of reliability and performance.
          <br /><br />

          Working closely with cross-functional teams, I ensure our AI initiatives remain at the
          forefront of innovation while effectively addressing real-world business challenges in
          the payroll and HR technology space.
        </p>
      </S.TextWrapper>
    </S.MainWrapper>
  )
}

export default Resolve
