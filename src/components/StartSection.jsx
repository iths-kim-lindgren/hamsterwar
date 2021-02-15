import React from 'react';
import '../App.css'
import styled from 'styled-components'
import MainSection from './MainSection'

const StyledArticle = styled.article`
    height: 50vh;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;
    & article {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    & img {
        opacity: 0.7;
    }
    & p {
        width: 50vw;
        color: black;
        text-align: center;
        font-size: 1.2rem;
    }
`

const StartSection = () => {

    return (
        <MainSection>
            <StyledArticle>
                <img src="./hamsterIMG/torch.webp" alt="torch" className="evil-otter"></img>
                <article>
                    <p>The evil otter lord Aurelius is capturing hamsters from all over the world and trapping them in the dungeon below his gladiator arena. Every night, several hamsters are selected to fight each other to the death - although the defeated hamster may live, if Aurelius is merciful.</p>
                    <p>Lord Aurelius will be greatly pleased if you submit a hamster of your own to his killing fields... Or you can simply join him at the balcony and watch a single battle. </p>
                </article>
                <img src="./hamsterIMG/torch.webp" alt="torch" />
            </StyledArticle>
        </MainSection>
    )
}

export default StartSection;