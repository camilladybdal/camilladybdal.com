import styled from 'styled-components'
import image from '../assets/wave.svg'

interface INav {
  open: boolean;
}

export const Ul = styled.ul<INav>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  font-size: 18px;

  a {
    text-decoration: none;
    text-transform: none;
    color: #000;
    cursor: pointer;

    &:hover {
      color: #0DADEA;
    }
  }

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #fdfdfdfa;
    position: fixed;
    transform: ${(props) => props.open ? 'translateX(0)' : 'translateX(100%)'};
    top: -16px;
    right: 0;
    height: 100%;
    width: 180px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 9;
    justify-content: normal;
    
    li {
      color: #000;
      margin-right: 34px;

      &:hover {
        color: #0DADEA;
      }
    }
  }
`
export const Logo = styled.h1`
    color: black;
    text-decoration: none !important;
    font-size: 1.5rem;
    font-weight: 10000;
    font-family: 'Trebuchet MS';

    //fiks font senere
`

export const Flexcontainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
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

/* Footer 1 */

export const Ocean = styled.div`
  height: 5%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #FFE194;
`

export const Wave = styled.div` 
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/wavePurple.svg) repeat-x;  
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
`
