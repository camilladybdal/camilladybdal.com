import React from 'react'
import * as S from './styles'
// import Logo from '../assets/logo_2_react.png'
import { NavLink } from 'react-router-dom'

type Props = {
  open: boolean;
}

const Navbar = (props: Props) => {
  return (
    <S.Flexcontainer >

      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <S.Logo>&lt; Dybdal /&gt;</S.Logo>
      </NavLink>

        <S.Ul open={props.open}>

          <NavLink to="/about"
            activeStyle={{
              fontWeight: 'bold',
              color: '#FFE194'
            }}
          >
            <li> About </li>
          </NavLink>
          <NavLink to="/projects"
            activeStyle={{
              fontWeight: 'bold',
              color: '#FFE194'
            }}
          >
            <li>Projects</li>
          </NavLink>
          <NavLink to="/cv"
            activeStyle={{
              fontWeight: 'bold',
              color: '#FFE194'
            }}
          >
            <li>CV</li>
          </NavLink>

        </S.Ul>

    </S.Flexcontainer>
  )
}

export default Navbar
