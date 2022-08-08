import React from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import cv from '../assets/cv.pdf'
import styled from 'styled-components'
import { BlobProvider } from '@react-pdf/renderer'

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  padding-bottom: 2rem;
  font-family: 'M PLUS Rounded 1c', sans-serif;

  .react-pdf__Page__canvas {
    width: 35em !important;
    height: auto !important;
    @media (max-width: 620px) {
      width: 20em !important;
    }
}

`

const InfoBox = styled.div`
  margin-bottom: 1rem;
  text-align: center;
  a{
    color: black;
    font-weight: bold;
    text-decoration: none;
    &:hover{
      color: #FFE194;
    }
  }
`

const MyDoc = (
  <Document file={cv}>
    <Page pageNumber={1}/>
  </Document>
)

const Cv: React.FC = () => {
  return (
    <MainWrapper>
        <InfoBox>
            <h1>My Resume</h1>
            <p> Have a look at my resume!
              A more detailed resume with references and attests can be sent upon request.
              <br/><br/>
              Click
              <a href = "https://www.linkedin.com/in/camilladybdal"> here </a>
               to go to my linkedIn, and

               <BlobProvider document={MyDoc}>
                  {({ url }) => (
                    <a href={cv} target="_blank" rel="noreferrer"> here </a>
                  )}
              </BlobProvider>
              to open the pdf in a separate window.
              </p>
        </InfoBox>

          <Document file={cv}>
              <Page pageNumber={1}/>
          </Document>

      </MainWrapper>
  )
}

export default Cv
