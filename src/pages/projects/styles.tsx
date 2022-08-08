import styled from 'styled-components'

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-family: 'M PLUS Rounded 1c', sans-serif;
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 50%;

    h1{
        text-align: center;
    }

    a {
    text-decoration: none;
    text-transform: none;
    color: #000;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      color: #FFE194;
    }
  }
`

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5rem;

    img{
        height: 30em;
    }

    @media (max-width: 730px) {
        img{
            height: 20em;
        }
    }

    @media (max-width: 390px) { // mobile
        img{
            width: 389px;
            height: auto;
        }
    }
`
