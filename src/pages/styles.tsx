import styled from 'styled-components'

/* Home */

export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2,minmax(0,1fr));
    column-gap: 1rem;
    align-items: center;

    margin-left: 8rem;
    margin-right: 8rem;
    /* margin-bottom: 8rem; */

    @media (max-width: 1065px) {
        display: flex;
        flex-wrap: wrap-reverse;
        justify-content: space-evenly;

        margin-top: 2rem;
        margin-left: 6rem;
        margin-right: 6rem;
    }
`

export const AboutContainer = styled.div`
    padding-bottom: 4rem;

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
            margin-inline-start: 0;
            margin-inline-end: 0;
        }
        @media (max-width: 1065px) {

            h1{
                text-align: center;
                font-size: 2.5em;
            }
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
        .socialMediaContainer{
            justify-content: center;
        }
        img{
            width: 4em;
        }
    }
`

export const ImageContainer = styled.div`
    padding-bottom: 4rem;

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

    @media (max-width: 1066px) {
        padding-bottom: 2rem;

        img{
            width: 18rem;
        }
    }

`
