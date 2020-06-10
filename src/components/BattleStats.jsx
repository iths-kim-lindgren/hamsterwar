import React, { useState } from 'react';
import '../App.css'
import styled from 'styled-components'
import { getStats } from './fetchData'

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
        <section className="main-section battle-stats">
            <article>
                <h2>Total Battles</h2>
                <p>Battles held:</p>
                <p>Deaths:</p>
                <h2>Top hamsters</h2>
                <article>
                    {topStats
                        ? topStats.map(hamster => (
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
                        ))
                        : null}
                </article>
                <h2>Bottom hamsters</h2>
                <ul>
                    {bottomStats
                        ? bottomStats.map(hamster => (
                            <li key={hamster.id}>
                                {hamster.name}
                            </li>
                        ))
                        : null}
                </ul>
                <button onClick={handleClick}>klicka</button>
            </article>
        </section>
    )
}


export default BattleStats;