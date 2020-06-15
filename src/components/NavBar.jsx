import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
import StartSection from './StartSection'
import Arena from './Arena'
import BattleStats from './BattleStats'
import AddHamster from './AddHamster'
import styled from 'styled-components'
import MainSection from './MainSection';

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
                <Link to="/upload"><button>Add Hamster</button></Link>
                <Link to="/graveyard"><button>Graveyard</button></Link>
            </nav>
            <Switch>
                <Route path="/arena">
                    <MainSection>
                        <Arena></Arena>
                    </MainSection>
                </Route>
                <Route path="/stats">
                    <MainSection>
                        <BattleStats />
                    </MainSection>
                </Route>
                <Route path="/upload">
                    <MainSection>
                        <AddHamster></AddHamster>
                    </MainSection>
                </Route>
                <Route path="/graveyard">
                    <MainSection>
                        This is the graveyard
                    </MainSection>
                </Route>
                <Route path="/">
                    <MainSection>
                        <StartSection />
                    </MainSection>
                </Route>
            </Switch>
        </Router>
    )
}

export default NavBar;