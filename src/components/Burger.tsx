import React, { useState } from 'react'
import * as S from './styles'
import Navbar from './Navbar'

const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <S.Burger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </S.Burger>
      <Navbar open={open} />
    </>
  )
}
export default Burger
