import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
import StartSection from './StartSection'
import Arena from './Arena'
import BattleStats from './BattleStats'
import AddHamster from './AddHamster'
import styled from 'styled-components'

// const Dropdown = styled.a`
//     color: green;
// `

// useEffect(() => {
//     toggleInvisible
//         (invisible === "invisible" ? "" : "invisible")
//         console.log("useeffect har körts")
// }, [toggleDropdown])

const NavBar = () => {

    return (
        <Router>
            <nav className="buttons">

                <Link to="/arena"><button>Arena</button></Link>
                <Link to="/stats"><button>Battle Stats</button></Link>
                <Link to="/add-hamster"><button>Add Hamster</button></Link>
                <Link to="/graveyard"><button>Graveyard</button></Link>
            </nav>
            <Switch>
                <Route path="/arena">
                    <Arena></Arena>
                </Route>
                <Route path="/stats">
                    <BattleStats/>
                </Route>
                <Route path="/add-hamster">
                    <AddHamster></AddHamster>
            </Route>
                <Route path="/graveyard">
                    This is the graveyard
            </Route>
                <Route path="/">
                    <StartSection/>
                </Route>
            </Switch>
        </Router>
    )
}

export default NavBar;