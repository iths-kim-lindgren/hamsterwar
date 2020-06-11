import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
import { getBattlingHamsters } from '../fetchData'
import Bordered from '../Bordered'
import styled from 'styled-components'


const StyledSection = styled.header`
& section {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
& article.mid {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
}
& article.mid img {
    width: 50%;
    height: 50%;
}
& button {
    width: 10rem;
}
`

const SingleBattle = () => {

    const [battlingHamsters, setBattlingHamsters] = useState(null)
    const [view, setView] = useState("battleSetup")
    const [battleImage, setBattleImage] = useState("./hamsterIMG/hamsterBattleInit.jpg")
    const [battleText, setBattleText] = useState(null)
    const [activeButton, setActiveButton] = useState(null)

    useEffect(() => {
        if (view === "battleSetup") {
            setBattleText("The combatants have been selected. A new hamster battle is about to begin.")
            setBattleImage("./hamsterIMG/hamsterBattleInit.jpg")
            setActiveButton(<button onClick={() => setView("battleOngoing")}>Fight!</button>)
        } else if (view === "battleOngoing") {
            setBattleText("...and the fight is on! Click on the image of the hamster you would like to win, or let fate decide.")
            setBattleImage(selectRandomImage())
            setActiveButton(<button onClick={() => setView("battleFinished")}>Let fate decide</button>)
        } else if (view === "battleFinished") {
            setBattleText("What a turnaround! The audience is wild! Lord Aurelius is indicating his thumb...")
            setBattleImage("./hamsterIMG/hamsterBattleFinished.jpg")
            setActiveButton(<div>
                <button onClick={() => setView("kill")}>👎</button>
                <button onClick={() => setView("spare")}>👍</button>
            </div>)
            // updateStats
        } else if (view === "spare") {
            setBattleText("Lord Aurelius is feeling merciful today. The loser was dragged off to the dungeons.")
            setActiveButton(<button onClick={() => setView("battleSetup")}>Next battle</button>)
        } else if (view === "kill") {
            setBattleText("The losing hamster was sent off to a better world. Visit the graveyard anytime to honor its remains.")
            setActiveButton(<button onClick={() => setView("battleSetup")}>Next battle</button>)
            // update living/dead hamster
        }

    }, [view])

    useEffect(() => {

        
    }, [view])

    useEffect(() => {
        async function fetchData() {
            let array = await getBattlingHamsters()
            setBattlingHamsters(array)
        }
        fetchData()
    }, [view === "battleSetup" === true])


    return (
        <StyledSection className="main-section">
            {battlingHamsters
                ?
                <section>
                    <Bordered>
                        <article>
                            {/* FIXA BILDER  <img src={hamster.img}></img> */}
                            <ul key={battlingHamsters[0].id}>
                                <li>Name: {battlingHamsters[0].name}</li>
                                <li>Age: {battlingHamsters[0].age}</li>
                                <li>Battles fought: {battlingHamsters[0].games}</li>
                                <li>Wins: {battlingHamsters[0].wins}</li>
                                <li>Defeats: {battlingHamsters[0].defeats}</li>
                            </ul>
                        </article>
                    </Bordered>
                    <article className="mid">
                        <p>{battleText}</p>
                        {activeButton}
                        <img src={battleImage}></img>
                    </article>
                    <Bordered>
                        <article>
                            {/* FIXA BILDER  <img src={hamster.img}></img> */}
                            <ul key={battlingHamsters[1].id}>
                                <li>Name: {battlingHamsters[1].name}</li>
                                <li>Age: {battlingHamsters[1].age}</li>
                                <li>Battles fought: {battlingHamsters[1].games}</li>
                                <li>Wins: {battlingHamsters[1].wins}</li>
                                <li>Defeats: {battlingHamsters[1].defeats}</li>
                            </ul>
                        </article>
                    </Bordered>
                </section>
                : null}
        </StyledSection>
    )
}

function selectRandomImage() {
    const array = ["./hamsterIMG/hamsterBattleOngoing1.jpg",
        "./hamsterIMG/hamsterBattleOngoing2.jpg", "./hamsterIMG/hamsterBattleOngoing3.jpg"]

    return array[Math.floor(Math.random() * 3)]
}


export default SingleBattle