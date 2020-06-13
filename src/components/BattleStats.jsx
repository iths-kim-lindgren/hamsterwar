import React, { useState } from 'react';
import '../App.css'
import styled from 'styled-components'
import { getStats } from './fetchData'
import Hamster from './Hamster'

const StyledSection = styled.section`
    justify-content: space-evenly;
`

const BattleStats = () => {

    const [topStats, setTopStats] = useState(null)
    const [bottomStats, setBottomStats] = useState(null)
    const handleClick = async () => {
        let array = await getStats();
        console.log("Got stats from API", array)
        setTopStats(array.top.toplist)
        setBottomStats(array.bottom.toplist)
    }

    return (
        <StyledSection className="main-section battle-stats">
            <article>
                <h2>Total Battles</h2>
                <p>Battles held:</p>
                <p>Deaths:</p>
            </article>
            <article>
                <h2>Top hamsters</h2>
                {topStats
                    ? topStats.map(hamster => (
                        <article>
                            <Hamster>
                                {/* FIXA BILDER  <img src={hamster.img}></img> */}
                                <ul key={hamster.id}>
                                    <li>Name: {hamster.name}</li>
                                    <li>Age: {hamster.age}</li>
                                    <li>Battles fought: {hamster.games}</li>
                                    <li>Wins: {hamster.wins}</li>
                                    <li>Defeats: {hamster.defeats}</li>
                                </ul>
                            </Hamster>
                        </article>
                    ))
                    : null}
            </article>
            <article>
                <h2>Bottom hamsters</h2>
                <ul>
                    {bottomStats
                        ? bottomStats.map(hamster => (
                            <article>
                                <Hamster>
                                    {/* FIXA BILDER  <img src={hamster.img}></img> */}
                                    <ul key={hamster.id}>
                                        <li>Name: {hamster.name}</li>
                                        <li>Age: {hamster.age}</li>
                                        <li>Battles fought: {hamster.games}</li>
                                        <li>Wins: {hamster.wins}</li>
                                        <li>Defeats: {hamster.defeats}</li>
                                    </ul>
                                </Hamster>
                            </article>
                        ))
                        : null}
                </ul>
                <button onClick={handleClick}>klicka</button>
            </article>
        </StyledSection>
    )
}


export default BattleStats;