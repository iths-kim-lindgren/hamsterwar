import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
import { getBattlingHamsters } from '../fetchData'
import Bordered from '../Bordered'
import styled from 'styled-components'


const StyledSection = styled.header`
& img {
    width: 30%;
    height: 30%;
}
`

const SingleBattle = () => {

    const [battlingHamsters, setBattlingHamsters] = useState(null)
    const [imageRendered, setImageRendered] = useState(false)

    useEffect(() => {
        async function fetchData() {
            let array = await getBattlingHamsters()
            setBattlingHamsters(array)
            console.log(battlingHamsters)

            if (array){
                var hamster1 = renderHamster(array, 0)
                var hamster2 = renderHamster(array, 1)
            }
        }
        fetchData()
    }, [])


    return (
        <StyledSection className="main-section">
            <p>The combatants have been selected. A new hamster battle is about to begin.</p>
            <button>Fight!</button>
            <img src="./hamsterIMG/hamsterBattleInit.jpg"></img>
            {battlingHamsters
                ? battlingHamsters.map(hamster => (
                    <Bordered>
                        <article>
                            {/* FIXA BILDER  <img src={hamster.img}></img> */}
                            <ul key={hamster.id}>
                                <li>Name: {hamster.name}</li>
                                <li>Age: {hamster.age}</li>
                                <li>Battles fought: {hamster.games}</li>
                                <li>Wins: {hamster.wins}</li>
                                <li>Defeats: {hamster.defeats}</li>
                            </ul>
                        </article>
                    </Bordered>
                ))
                : null}
                {hamster1}
                {hamster2}
        </StyledSection>
    )
}

function renderHamster(battlingHamsters, index) {
    console.log(battlingHamsters)
    const hamster = battlingHamsters[index]
    return <Bordered>
        <article>
            {/* FIXA BILDER  <img src={hamster.img}></img> */}
            <ul key={hamster.id}>
                <li>Name: {hamster.name}</li>
                <li>Age: {hamster.age}</li>
                <li>Battles fought: {hamster.games}</li>
                <li>Wins: {hamster.wins}</li>
                <li>Defeats: {hamster.defeats}</li>
            </ul>
        </article>
    </Bordered>
}

export default SingleBattle