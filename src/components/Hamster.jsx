import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Bordered from './Bordered'

const StyledArticle = styled.article`
    width: 12em;
    height: 20em;
`
const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
`



const Hamster = () => {

    return (
        <div className="hamster-container">
            <Bordered>
                <StyledArticle>
                    <StyledHeader>
                        <h3>Hamster name</h3>
                        <p>Date component</p>
                    </StyledHeader>
                    <img src="" alt="Hamster"></img>
                    <p>Presentation</p>
                </StyledArticle>
            </Bordered>
        </div>
    )
}

export default Hamster;