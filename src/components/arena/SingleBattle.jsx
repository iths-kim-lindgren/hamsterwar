import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
import { getBattlingHamsters, postBattle } from '../fetchData'
import Hamster from '../Hamster'
import styled from 'styled-components'
import MainSection from '../MainSection';

const StyledArticle = styled.article`
/* & article { */
    display: flex;
    flex-direction: row;
    justify-content: center;
/* } */
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

const SingleBattle = ({fetchChampions, champions}) => {

    // const [battlingHamsters, setBattlingHamsters] = useState(null)
    const [winner, setWinner] = useState(null)
    const [loser, setLoser] = useState(null)
    const [view, setView] = useState("battleSetup")
    const [battleImage, setBattleImage] = useState("./hamsterIMG/hamsterBattleInit.jpg")
    const [battleText, setBattleText] = useState(null)
    const [activeButton, setActiveButton] = useState(null)

    useEffect(() => {
        if (champions === null){
            fetchChampions()
        }
    }, [])

    
    useEffect(() => {
        if (view === "battleSetup") {
            if (champions !== null) fetchChampions()
            // fetchData()
            setBattleText("The combatants have been selected. A new hamster battle is about to begin.")
            setBattleImage("./hamsterIMG/hamsterBattleInit.jpg")
            setActiveButton(<button onClick={() => setView("battleOngoing")}>Fight!</button>)
        } else if (view === "battleOngoing") {
            setBattleText("...and the fight is on! Click on the image of the hamster you would like to win, or let fate decide.")
            setBattleImage(selectRandomImage())
            setActiveButton(<button onClick={() => setView("battleFinished"),
                () => selectWinner(champions[Math.floor(Math.random() * 1)])}>Let fate decide</button>)
        } else if (view === "battleFinished") {
            setBattleText(`${winner} wins! What a game! Lord Aurelius is indicating his thumb...`)
            setBattleImage("./hamsterIMG/hamsterBattleFinished.jpg")
            setActiveButton(<div>
                <button onClick={() => setView("kill")}>👎</button>
                <button onClick={() => setView("spare")}>👍</button>
            </div>)
            // updateStats
        } else if (view === "spare") {
            setBattleText(`Lord Aurelius is feeling merciful today. ${loser} was dragged off to the dungeons.`)
            setActiveButton(<button onClick={() => setView("battleSetup")}>Next battle</button>)
        } else if (view === "kill") {
            setBattleText(`${loser} was sent off to a better world. Visit the graveyard anytime to honor its remains.`)
            setActiveButton(<button onClick={() => setView("battleSetup")}>Next battle</button>)
            // update living/dead hamster
        }

    }, [view])

    // async function fetchData() {
    //     let array = await getChampions()
    //     setBattlingHamsters(array)
    // }

    function selectWinner(winner) {
        if (view !== "battleOngoing") return

        // uppdate winning and losing hamsters
        setWinner(winner.name)
        winner === champions[0] ? setLoser(champions[1].name) : setLoser(champions[0].name)
        setView("battleFinished")
    }

    return (
        <MainSection>
            {champions
                ?
                <StyledArticle>
                    <Hamster>
                        <article>
                            <img src={champions[0].imgURL.url} onClick={() => selectWinner(champions[0])}></img>
                            <ul key={champions[0].id}>
                                <li key={champions[0].id+'name'}>Name: {champions[0].name}</li>
                                <li>Age: {champions[0].age}</li>
                                <li>Battles fought: {champions[0].games}</li>
                                <li>Wins: {champions[0].wins}</li>
                                <li>Defeats: {champions[0].defeats}</li>
                            </ul>
                        </article>
                    </Hamster>
                    <article className="mid">
                        <p>{battleText}</p>
                        {activeButton}
                        <img src={battleImage}></img>
                    </article>
                    <Hamster>
                        <article>
                            <img src={champions[1].imgURL.url} onClick={() => selectWinner(champions[1])}></img>
                            <ul key={champions[1].id}>
                                <li>Name: {champions[1].name}</li>
                                <li>Age: {champions[1].age}</li>
                                <li>Battles fought: {champions[1].games}</li>
                                <li>Wins: {champions[1].wins}</li>
                                <li>Defeats: {champions[1].defeats}</li>
                            </ul>
                        </article>
                    </Hamster>
                    </StyledArticle>
                : null}
        </MainSection>
    )
}

function selectRandomImage() {
    const array = ["./hamsterIMG/hamsterBattleOngoing1.jpg",
        "./hamsterIMG/hamsterBattleOngoing2.jpg", "./hamsterIMG/hamsterBattleOngoing3.jpg"]

    return array[Math.floor(Math.random() * 3)]
}


export default SingleBattle