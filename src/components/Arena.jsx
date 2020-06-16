import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
import InspectHamsters from './arena/InspectHamsters';
import SingleBattle from './arena/SingleBattle';
import Tournament from './arena/Tournament';
import {getChampions} from './fetchData'


const Arena = () => {

    const [champions, setChampions] = useState(null)
    const [view, setView] = useState("singleBattle")

    async function fetchChampions() {
        let array = await getChampions()
        console.log("fetch Champions")
        setChampions(array)
    }

    let content = null
    if (view === "singleBattle") {
        content = <SingleBattle champions={champions} fetchChampions={fetchChampions} />
    } else if (view === "inspectHamsters") {
        content = <InspectHamsters doSetChampions={() => setChampions}
            fetchChampions={() => fetchChampions()} />
    } else {
        content = <Tournament />
            }

            return (
                <section>
                    <nav>
                        <button onClick={() => setView('inspectHamsters')}>Inspect Hamsters</button>
                        <button onClick={() => setView('singleBattle')}>Single Battle</button>
                        <button onClick={() => setView('tournament')}>Tournament</button>
                    </nav>
                    {content}
                </section>
            )
    }

    export default Arena