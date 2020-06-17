import React, { useState, useEffect } from 'react';
import '../App.css'
import styled from 'styled-components'
import { getStats, getBattles, getHamsterImages } from './fetchData'
import Hamster from './Hamster'
import MainSection from './MainSection';

const StyledSection = styled.section`
    display: flex;
    justify-content: space-evenly;
`

const BattleStats = () => {

    const [topStats, setTopStats] = useState([])
    const [bottomStats, setBottomStats] = useState([])
    const [battles, setBattles] = useState(null)
    
    useEffect(() => {
        async function getData() {
                let array = await getStats();
                setTopStats(array.top.toplist)
                setBottomStats(array.bottom.toplist)
                let data = await getBattles()
                setBattles(data)
            }
            getData()
        }, [])
        
        // DENNA KOD SKULLE FÅ IN BILDER OCKSÅ MEN MINA USE-STATE-VARIABLER HINNER INTE SÄTTAS OVANFÖR
        // AV NÅGON ANLEDNING SÅ DET GICK INTE
    //     let topImageArray = []
    //     console.log("TOPSTATS", topStats)
    //     for (let i = 0; i < 4 /*topStats.length*/; i++) {
    //         topImageArray.push(await getHamsterImages(topStats[i].imgName))
    //         console.log("toppbilder", topImageArray)
    //         topStats[i].imgURL = topImageArray[i].url
    //     }
    //     let bottomImageArray = []
    //     for (let i = 0; i < bottomStats.length; i++) {
    //         bottomImageArray.push(await getHamsterImages(bottomStats[i].imgName))
    //         bottomStats[i].imgURL = bottomImageArray[i].url
    // }


    return (
        <MainSection>
            <StyledSection>
                <article>
                    <h2>Total Battles</h2>
                    <p>Battles held: {battles}</p>
                    {/* <p>Deaths:</p> */}
                </article>
                <article>
                    <h2>Top hamsters</h2>
                    {topStats
                        ? topStats.map(hamster => (
                            <article>
                                <Hamster>
                                    <img src={hamster.imgURL}></img>
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
                                        <img src={hamster.imgURL}></img>
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
                </article>
            </StyledSection>
        </MainSection>
    )
}
export default BattleStats;