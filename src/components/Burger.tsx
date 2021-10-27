import React, { useState } from 'react'
import * as S from './styles'
import { NavLink } from 'react-router-dom'

const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <S.Burger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </S.Burger>

      <S.Flexcontainer >

        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <S.Logo>&lt; Dybdal /&gt;</S.Logo>
        </NavLink>

        <S.Ul open={open}>

          <NavLink to="/home"
            activeStyle={{
              fontWeight: 'bold',
              color: '#FFE194'
            }}
            onClick = {() => {
              setOpen(false)
            }}
          >
            <li> Home </li>

          </NavLink>
          <NavLink to="/projects"
            activeStyle={{
              fontWeight: 'bold',
              color: '#FFE194'
            }}
            onClick = {() => {
              setOpen(false)
            }}
          >
            <li>Projects</li>
          </NavLink>
          <NavLink to="/cv"
            activeStyle={{
              fontWeight: 'bold',
              color: '#FFE194'
            }}
            onClick = {() => {
              setOpen(false)
            }}
          >
            <li>CV</li>
          </NavLink>

        </S.Ul>
    </S.Flexcontainer>
    </>
  )
}
export default Burger
