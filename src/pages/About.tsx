/* eslint-disable react/no-unescaped-entities */
import React from 'react'
// import pic1 from '../assets/about_start.png'
// import pic2 from '../assets/about_internship.png'
// import pic3 from '../assets/about_turbilde1.png'
// import pic4 from '../assets/about_start.png'
import styled from 'styled-components'

const MainWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2,minmax(0,1fr));
    column-gap: 3rem;
    /* align-items: center; */

    margin-left: 10rem;
    margin-right: 10rem;
    margin-top: 5rem;

    @media (max-width: 1065px) {
        display: flex;
        flex-wrap: wrap-reverse;
        justify-content: space-evenly;

        margin-top: 2rem;
        margin-left: 6rem;
        margin-right: 6rem;
    }
`
const TextContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
    font-family: 'Lato', sans-serif;

     h1{
        font-size: 1rem;

     }
     
     p{
        display: block;
        font-family: inherit;
        font-size: 1.1em;    

        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        }
`

// const ImageContainer = styled.div`
//     /* display: flex; */
//     /* justify-content: flex-end; */

//     margin-bottom: 3rem;

//     img{
//         display: block;
//         max-width: 35rem;
//         border: solid;
//         border-width: 10px;
//         border-color: #FFE194;
//     }

//     @media (max-width: 1066px) {
//         padding-bottom: 2rem;

//         img{
//             width: 18rem;
//         }
//       }
// `

const About = () => {
  return (
    <MainWrapper>

       <TextContainer>
           <h1>About me</h1>
           <p>
            To do
           </p>
       </TextContainer>

   </MainWrapper>
  )
}

export default About
