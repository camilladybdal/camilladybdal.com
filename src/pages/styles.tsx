import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`

export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2,minmax(0,1fr));
    column-gap: 1rem;
    align-items: center;
    height: 100%;

    margin-top: 8rem;
    margin-left: 8rem;
    margin-right: 8rem;

    @media (max-width: 1065px) {
        display: flex;
        flex-wrap: wrap-reverse;
        justify-content: space-evenly;

        margin-top: 2rem;
        margin-left: 4rem;
        margin-right: 4rem;
    }
`

export const AboutContainer = styled.div`

    .textContainer{
        @import url('https://fonts.googleapis.com/css2?family=Akronim&family=Allerta&family=Karla&display=swap');
        font-family: 'Karla', sans-serif;

        h1{
            display: block;
            font-family: inherit;
            font-weight: bold;
            font-size: 3.5em;
            margin-block-start: 0.7em;
            margin-block-end: 0.7em;
            margin: 0 0;
            padding-bottom: 20px;
        }
        p{
            display: block;
            font-family: inherit;
            font-size: 1.1em;    

            margin-block-start: 0;
            margin-block-end: 0;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
        }
    }

    .socialMediaContainer{
        display: flex;
        margin-top: 2em;
    }
    img{
        width: 5em;
        padding-right: 1em;
    }

    @media (max-width: 1065px) {
        // some style here => text is too large
    }
`

export const ImageContainer = styled.div`

    img{
        display: block;
        margin-left: auto;
        margin-right: auto;

        max-width: 24rem;
        border-radius: 50%;
        border: solid;
        border-width: 10px;
        border-color: #FFE194;
    }

    @media (max-width: 750px) {
        img{
            width: 20rem;
        }
    }

`
