import styled from 'styled-components'
import image from '../assets/wave.svg'

interface INav {
  open: boolean;
}

/* Header */
export const Logo = styled.h1`
    color: black;
    text-decoration: none !important;
    font-size: 1.7rem;
    font-weight: bold;
    font-family: 'Trebuchet MS';
    margin-block-start: 0;
    margin-block-end: 0;
`

export const Flexcontainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1em 1em 1.5em;
`

export const Ul = styled.ul<INav>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  font-size: 18px;
  font-weight: 500;

  a {
    text-decoration: none;
    text-transform: none;
    color: #000;
    cursor: pointer;

    &:hover {
      color: #FFE194;
    }
  }

  li {
    margin-right: 2em;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgb(255, 225, 148, 0.98);

    transform: ${(props) => props.open ? 'translateX(0)' : 'translateX(100%)'};
   
    position: fixed;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;

    transition: transform 0.3s ease-in-out;
    z-index: 9;
    justify-content: center;
    
    
    li {
      color: #000;
      margin-top: 3em;
      font-weight: bold;

      &:hover {
        color: rgba(253, 253, 253);
      }
    }
  }
`

export const Burger = styled.div<INav>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${(props) => props.open ? '#000' : '#000'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    cursor: pointer;
    &:nth-child(1) {
      transform: ${(props) => props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${(props) => props.open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${(props) => props.open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${(props) => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

/* Footer */
export const Ocean = styled.footer`
  height: 4.5rem;
  width: 100%;
  background: #FFE194;
  grid-row-start: 2;
  grid-row-end: 3;
`

export const Wave = styled.div`
  @media (min-height: 700px) and (min-width: 1200px) {
    background-image: url(${image});
    position: absolute;
    bottom: -10px;
    width: 6400px;
    height: 198px;
    animation: wave 12s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite, swell 8s ease -1.25s infinite;;
    transform: translate3d(0, 0, 0);

    @keyframes wave {
      0% {
        margin-left: 0;
      }
      100% {
        margin-left: -1600px;
      }
    }
    @keyframes swell {
      0%,
      100% {
        transform: translate3d(0, -40px, 0);
      }
      50% {
        transform: translate3d(0, -10px, 0);
      }
    }
    .endWave{
      display: none;
    }
  }


`
