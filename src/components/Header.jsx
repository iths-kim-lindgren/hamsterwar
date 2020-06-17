import React from 'react'
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
    & a button {
        color: #E3F512;
        text-align: center;
        font-family: 'Righteous', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        /* background: linear-gradient(to bottom, #3C3C3C, #3C3C3C 45%, #1B1818 55%); */
        background: linear-gradient(to bottom, #3C3C3C, #3C3C3C 30%, #1B1818 70%);
        height: 2em;
        width: 8em;
        transform: translateY(0.6em);
    }
`

const Header = () => {

    return (
            <StyledHeader>
                <article>
                    <img src="./hamsterIMG/headerHamster.png" alt="hamster"></img>
                    <h1>Hamsterwars</h1>
                    <img src="./hamsterIMG/headerHamster.png" className="reverse" alt="hamster"></img>
                </article>
                {/* <article className="buttons">
                    <Link to="/arena"><button>Arena</button></Link>
                    <Link to="/stats"><button>Battle Stats</button></Link>
                    <Link to="/add-hamster"><button>Add Hamster</button></Link>
                    <Link to="/graveyard"><button>Graveyard</button></Link>
                </article> */}
            </StyledHeader>
    )
}

export default Header;