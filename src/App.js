import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Intro from './pages/intro'
import Menu from './pages/menu'
import Pokedex from './pages/pokedex'
import Team from './pages/team'
import NotFound from './pages/not_found'

class App extends React.Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Intro></Intro>
                    </Route>
                    <Route exact path="/menu">
                        <Menu></Menu>
                    </Route>
                    <Route exact path="/pokedex">
                        <Pokedex></Pokedex>
                    </Route>
                    <Route exact path="/team">
                        <Team></Team>
                    </Route>
                    <Route>
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App