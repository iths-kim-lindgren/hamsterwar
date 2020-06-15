import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Bordered from './Bordered'

const StyledArticle = styled.article`
    width: 16em;
    height: 20em;
    border: 3px solid darkgrey;
    padding: 1em; 
    margin: 0.5em;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    & img {
        width: 10em;
        max-height: 12em;
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