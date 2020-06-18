import React, { useState, useEffect } from 'react'
import { getLivingHamsters, getHamsterImages } from '../fetchData'
import Hamster from '../Hamster'
import styled from 'styled-components'

const StyledButton = styled.button`
    width: 10em;
`

const StyledArticle = styled.article`
    height: 20em;
    & li {
        font-size: 0.8em;
    }
`

const InspectHamsters = ({fetchChampions, champions}) => {

    const [livingHamsters, setLivingHamsters] = useState(null)

    useEffect(() => {
        async function fetchData() {
            let objectArray = await getLivingHamsters()

            // hämta bildURL:er
            let imageArray = []
            for (let i = 0; i < objectArray.length; i++) {
                imageArray.push(await getHamsterImages(objectArray[i].imgName))

                // mappa över hamsterarray, och lägg till URL:erna i respektive hamsterobjekt
                objectArray[i].imgURL = imageArray[i].url
            }
            setLivingHamsters(objectArray)
        }
        fetchData()
    }, [])

    function selectChampion(button, hamster){
        champions.push(hamster)
        // console.log(champions)
        // console.log(champions[0])
        // console.log(champions[0].imgURL)
        // console.log(champions[0].imgURL.url)
        button.classList.add("disabled")
    }


    return (
        <section className="main-section inspect-hamsters">
            
                <h2 className="block">"You may select champions for the coming battles," says Aurelius, "or I will do so myself!"</h2>
            
            {livingHamsters
                ? livingHamsters.map(hamster =>
                    (
                        <Hamster>
                            <StyledArticle>
                                {/* VET EJ VARFÖR DEN SÄGER ATT DESSA NYCKLAR INTE BLIR UNIKA */}
                            <img alt="hamster" src={hamster.imgURL}/>
                            <ul key={hamster.id + 'ul'}>
                                <li key={hamster.id + hamster.name}>Name: {hamster.name}</li>
                                <li key={hamster.id + hamster.age}>Age: {hamster.age}</li>
                                <li key={hamster.id + hamster.games}>Battles fought: {hamster.games}</li>
                                <li key={hamster.id + hamster.wins}>Wins: {hamster.wins}</li>
                                <li key={hamster.id + hamster.defeats}>Defeats: {hamster.defeats}</li>
                            </ul>
                            </StyledArticle>
                                <StyledButton onClick={event => selectChampion(event.target, hamster)}>Select Champion</StyledButton>
                        </Hamster>
                    ))
                : null}

        </section>
    )
}

export default InspectHamsters;