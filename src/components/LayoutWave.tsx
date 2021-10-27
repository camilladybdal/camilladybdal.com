import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'
import FooterWave from './FooterWave'

const LayoutComp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
`

const FullFlex = styled.div`
    display: flex;
    flex-grow: 1;
`

const LayoutWave: React.FC = ({ children }) => {
  return (
        <LayoutComp>
            <Burger/>

            <FullFlex>
                {children}
            </FullFlex>

            <FooterWave />
        </LayoutComp>
  )
}

export default LayoutWave
