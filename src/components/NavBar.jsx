import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import StartSection from './StartSection'
import Arena from './Arena'
import BattleStats from './BattleStats'
import AddHamster from './AddHamster'
import MainSection from './MainSection';
import Graveyard from './Graveyard';

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
                        <Graveyard></Graveyard>
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