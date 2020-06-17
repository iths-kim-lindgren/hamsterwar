import React from 'react'
import styled from 'styled-components'

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

const Hamster = ({ children }) => {

    return (
        <StyledArticle>
            {children}
        </StyledArticle>
    )
}

export default Hamster;