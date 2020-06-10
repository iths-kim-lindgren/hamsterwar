import React, { useState, useEffect } from 'react'
import headerHamster from './headerHamster.png'
import styled from 'styled-components'


const StyledHeader = styled.header`
    justify-content: center;
    background-color: #1B1818;
    height: 22vh;
    flex-direction: column;

    & img {
        height: 10vh;
    }
    & img.reverse {
        transform: scaleX(-1);
    }
    & h1 {
        font-family: 'Righteous', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 3.5em;
        margin: 0.3em 0;
        color: #E3F512;
    }
    & article {
        /* width: 80vw; */
        justify-content: center;
        align-items: center;
    }
    & article.buttons {
        justify-content: space-around;
    }
    & button {
        color: #E3F512;
        font-family: 'Righteous', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        background: linear-gradient(to left, #3C3C3C, #3C3C3C 50%, #1B1818);
        height: 2.5em;
        width: 8em;
        transform: translateY(0.6em);
    }

`

const Header = () => {

    return (
        <StyledHeader>
            <article>
                <img src={headerHamster} alt="hamster"></img>
                <h1>Hamsterwars</h1>
                <img src={headerHamster} className="reverse" alt="hamster"></img>
            </article>
            <article className="buttons">
            <button>Arena</button>
            <button>Battle Stats</button>
            <button>Add hamster</button>
            <button>Graveyard</button>
            </article>
        </StyledHeader>
    )
}

export default Header;