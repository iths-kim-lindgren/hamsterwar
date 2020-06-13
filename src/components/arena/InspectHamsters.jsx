import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
import { getLivingHamsters, getHamsterImages } from '../fetchData'
import Hamster from '../Hamster'

const InspectHamsters = () => {

    const [livingHamsters, setLivingHamsters] = useState(null)
    // const [hamsterImage, setHamsterImage] = useState(null)

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

    return (
        <section className="main-section inspect-hamsters">
            <p>"Behold," says Aurelius, "the one over there is particularly fresh!"</p>
            {livingHamsters
                ? livingHamsters.map(hamster =>
                    (
                        <Hamster>
                            <article>
                                <img src={hamster.imgURL}></img>
                                <ul key={hamster.id}>
                                    <li>Name: {hamster.name}</li>
                                    <li>Age: {hamster.age}</li>
                                    <li>Battles fought: {hamster.games}</li>
                                    <li>Wins: {hamster.wins}</li>
                                    <li>Defeats: {hamster.defeats}</li>
                                </ul>

                            </article>
                        </Hamster>
                    ))
                : null}

        </section>
    )
}


export default InspectHamsters;