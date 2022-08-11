/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import placeholder from '../../assets/nft.png'
import * as S from './styles'
import styled from 'styled-components'

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    border: solid 1px black;

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

const NFT = () => {
  return (
        <S.MainWrapper>
                <S.TextWrapper>
                    <h1> NFT Marketplace </h1>

                    <p>
                    NFT stands for Non-fungible Tokens, and has grown much in popularity over the past few years.
                    They are traded like cryptocurrency, typically on the Ethereum blockchain. For my final project
                    in the class <a href = "https://www.unibo.it/en/teaching/course-unit-catalogue/course-unit/2020/448362"> Blockchain and cryptocurrencies </a> at the University of Bologna, I implemented my own
                    version of an NFT marketplace, were one could mint, sell and buy NFTs. My project obtained the hightest
                    Italian grade of 30.
                    <br></br><br></br>

                    The application can be regarded as a full-stack solution consisting of a
                    backend written in Solidity and hosted on the blockchain, and a front-end
                    written in Typescript and React. This type of
                    application is known as a DApp, a Decentralized Application. Solidity is
                    an object-oriented programming language used for implementing smart contracts on
                    different blockchain platforms, and is mostly used for Ethereum. The project was
                    implemented using the Hardhat development environment.

                    <br></br><br></br>

                    Once you enter the DApp, you need to connect using a crypto-wallet,
                    specifically MetaMask. This allows the backend to know whose assets to display,
                    and how much crypto you have in your wallet to trade with. All NFTs that are minted
                    are hosted on IPFS: InterPlanetary File System, a peer-to-peer network protocol for file
                    saving and sharing.

                    <br></br><br></br>

                    The project has't been published yet. If you are interested in more details, feel free to take a peek at the project at <a href = "https://github.com/camilladybdal/nft-market"> github. </a>

                    </p>
                </S.TextWrapper>

                <ImageWrapper>
                    <img src={placeholder} />
                </ImageWrapper>

        </S.MainWrapper>
  )
}

export default NFT
