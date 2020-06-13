import React, {useState} from 'react';
import '../App.css'
import styled from 'styled-components'
import { getHamsterImages } from './fetchData'

const StyledSection = styled.section`
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;
    & img {
        height: 30vh;
    }
    & article {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50vh;
    }
    & article p {
        width: 50vw;
        text-align: center;
        font-family: 'Righteous', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: black;
    }
`

const MainSection = () => {

    const [hamsterImage, setHamsterImage] = useState(null)

    async function setImg () {
        for (let i = 1; i < 2; i++){
            let imgUrl = await getHamsterImages(i)
            setHamsterImage(imgUrl.url)
            console.log(imgUrl)
        }
    }
    
    return (
        <StyledSection className="main-section start-section">
        <button onClick={() => setImg()}></button>
        <img src={hamsterImage}></img>
        <article>
            <p>The evil otter lord Aurelius is capturing hamsters from all over the world and trapping them in the dungeon below his gladiator arena. Every night, several hamsters are selected to fight each other to the death - although the defeated hamster may live, if Aurelius is merciful.

Lord Aurelius will be greatly pleased if you submit a hamster of your own to his killing fields... Or you can simply join him at the balcony and watch a single battle. </p>
        </article>
        <img src="./hamsterIMG/evilOtter.png" alt="evilOtter" className="evil-otter"></img>
    </StyledSection>
)
    }

export default MainSection;