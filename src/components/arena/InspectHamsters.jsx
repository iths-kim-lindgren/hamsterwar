import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
import { getLivingHamsters } from '../fetchData'
import Bordered from '../Bordered'

const InspectHamsters = () => {

    const [livingHamsters, setLivingHamsters] = useState(null)

    useEffect(() => {
        async function fetchData() {
            let array = await getLivingHamsters()
            setLivingHamsters(array)
            // console.log(livingHamsters)
        }
        fetchData()
    }, [])

    return (
        <section className="main-section inspect-hamsters">
            <p>"Behold," says Aurelius, "the one over there is particularly fresh!"</p>
            {livingHamsters
                ? livingHamsters.map(hamster => (
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

        </section>
    )
}


export default InspectHamsters;