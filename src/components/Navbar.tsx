import React from 'react'
import * as S from './styles'
import Logo from '../assets/logo.svg'
// import Logo from '../assets/logo_utkast1.png'
import { NavLink } from 'react-router-dom'

type Props = {
  open: boolean;
}

const Navbar = (props: Props) => {
  return (
    <S.Flexcontainer >

      <NavLink to="/">
        <S.LogoUl src={Logo} alt={'Gustavo Scarpim'} />
      </NavLink>

        <S.Ul open={props.open}>

          <NavLink to="/about"
            activeStyle={{
              fontWeight: 'bold',
              color: '#0DADEA'
            }}
          >
            <li> About </li>
          </NavLink>
          <NavLink to="/cv"
            activeStyle={{
              fontWeight: 'bold',
              color: '#0DADEA'
            }}
          >
            <li>Cv</li>
          </NavLink>
          <NavLink to="/projects"
            activeStyle={{
              fontWeight: 'bold',
              color: '#0DADEA'
            }}
          >
            <li>Projects</li>
          </NavLink>
        </S.Ul>

    </S.Flexcontainer>
  )
}

export default Navbar
