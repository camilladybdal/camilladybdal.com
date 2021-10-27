import React from 'react'
import * as S from './styles'
import styled from 'styled-components'

const LayoutComp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
`

const FooterWave = () => {
  return (
      <LayoutComp>
        <S.Ocean>
          <S.Wave> </S.Wave>
        </S.Ocean>
      </LayoutComp>
  )
}

export default FooterWave
