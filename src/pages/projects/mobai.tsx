/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import placeholder from '../../assets/bearing_point.png'
import * as S from './styles'

const Mobai = () => {
  return (
        <S.MainWrapper>
                <S.ImageWrapper>
                    <img src={placeholder} />
                </S.ImageWrapper>

                <S.TextWrapper>
                    <h1> Project with Mobai and BearingPoint </h1>
                    <p>
                    <a href = "https://www.mobai.bio/"> Mobai </a> is a StartUp delivering a facial recognition system, and they
                    specialize in creating robust authentication software with the ability
                    to detect presentation attacks and morph attacks. I worked with Mobai during my
                    winternship as a Data Analyst at <a href = "https://www.bearingpoint.com/en/"> BearingPoint </a> , specifically on their morphing detection system.
                    <br></br><br></br>

                    Morphing is a technique in which one blends two images (of faces), which
                    results in a new image that has features from both. Detecting if an image is
                    morphed is difficult, even for humans, as morphing techniques these days are incredibly good.
                    For authentication systems, morphed images can allow two people to pass as one, which can be problematic
                    for different reasons.

                    <br></br><br></br>

                    My work included implementing a pipeline for Differential Morphing Attack Detection (DMAD),
                    which involves detecting if the image is a morph or not, given a “present” image of the person
                    in addition to the suspected morph. This kind of system makes sense in a lot of applications, for
                    instance in automatic passport control. The DMAD pipeline included several parts: facial detection,
                    facial recognition, and eventually a classification of morph or not morph.

                    <br></br><br></br>
                    Technologies used include Python, C++, TensorFlow and OpenCV.

                    </p>
                </S.TextWrapper>

        </S.MainWrapper>
  )
}

export default Mobai
