import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
import InspectHamsters from './arena/InspectHamsters';
import SingleBattle from './arena/SingleBattle';
import Tournament from './arena/Tournament';


const Arena = () => {
    
    const [view, setView] = useState("singleBattle")
    let content = null
    if (view === "singleBattle"){
        content = <SingleBattle/>
    } else if (view === "inspectHamsters"){
        content = <InspectHamsters/>
    } else {
        content = <Tournament/>
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