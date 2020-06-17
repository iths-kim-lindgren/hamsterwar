import React, { useState } from 'react';
import '../App.css'
import styled from 'styled-components'
import MainSection from './MainSection'

const StyledArticle = styled.article`
    height: 50vh;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;
    & img {
        height: 30vh;
    }
    & p {
        width: 50vw;
        height: 35vh;
        font-family: 'Righteous', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: black;
    }
`

const StartSection = () => {

    return (
        <MainSection>
            <StyledArticle>
                <p>The evil otter lord Aurelius is capturing hamsters from all over the world and trapping them in the dungeon below his gladiator arena. Every night, several hamsters are selected to fight each other to the death - although the defeated hamster may live, if Aurelius is merciful.
Lord Aurelius will be greatly pleased if you submit a hamster of your own to his killing fields... Or you can simply join him at the balcony and watch a single battle. </p>
                <img src="./hamsterIMG/evilOtter.png" alt="evilOtter" className="evil-otter"></img>
            </StyledArticle>
        </MainSection>
    )
}

export default StartSection;