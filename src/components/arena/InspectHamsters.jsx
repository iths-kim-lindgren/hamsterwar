import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
import { getLivingHamsters, getHamsterImages } from '../fetchData'
import Hamster from '../Hamster'
import styled from 'styled-components'

const StyledButton = styled.button`
    width: 10em;
`

const InspectHamsters = ({fetchChampions, doSetChampions}) => {

    const [livingHamsters, setLivingHamsters] = useState(null)
    const [buttonText, setButtonText] = useState("Select Champion")
    const [champions, setChampions] = useState([])
    // const [champion2, setChampion2] = useState(null)

    useEffect(() => {
        async function fetchData() {
            let objectArray = await getLivingHamsters()

            // hämta bildURL:er
            let imageArray = []
            // for (let i = 0; i < objectArray.length; i++) {
                // imageArray.push(await getHamsterImages(objectArray[i].imgName))

                // mappa över hamsterarray, och lägg till URL:erna i respektive hamsterobjekt
                // objectArray[i].imgURL = imageArray[i].url
                
                //objectArray[i].imgURL = objectArray[i].imgName;
            // }
            setLivingHamsters(objectArray)
        }
        fetchData()
    }, [])

    return (
        <section className="main-section inspect-hamsters">
            
                <h2 className="block">"You may select champions for the coming battles," says Aurelius, "or I will do so myself!"</h2>
            
            {livingHamsters
                ? livingHamsters.map(hamster =>
                    (
                        <Hamster>
                            {/* <img src={hamster.imgURL}/> */}
                            <ul key={hamster.id}>
                                <li>Name: {hamster.name}</li>
                                <li>Age: {hamster.age}</li>
                                <li>Battles fought: {hamster.games}</li>
                                <li>Wins: {hamster.wins}</li>
                                <li>Defeats: {hamster.defeats}</li>
                                <StyledButton onClick={()=> doSetChampions} disabled={false}>{buttonText}</StyledButton>
                            </ul>
                        </Hamster>
                    ))
                : null}

        </section>
    )
}


export default InspectHamsters;