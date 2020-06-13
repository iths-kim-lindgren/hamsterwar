import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Bordered from './Bordered'

const StyledArticle = styled.article`
    width: 16em;
    height: 20em;
    border: 3px solid darkgrey;
    padding: 1em; 
    margin: 0.5em;
    display: inline-block;
    border-radius: 5%;

    & img {
        width: 70%;
        /* height: 30%; */
    }
`
const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
`

const Hamster = ({ children }) => {

    return (
        <StyledArticle>
            {children}
        </StyledArticle>
    )
}

export default Hamster;