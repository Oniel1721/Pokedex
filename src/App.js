import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Intro from './pages/intro'
import Menu from './pages/menu'
import Pokedex from './pages/pokedex'
import Team from './pages/team'
import NotFound from './pages/not_found'

class App extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Route exact path="/intro" component={Intro} />
                <Route exact path="/menu" component={Menu} />
                <Route exact path="/pokedex" component={Pokedex} />
                <Route exact path="/team" component={Team} />
                <Route component = {NotFound} />
            </BrowserRouter>
        )
    }
}


/*
                <Switch>
                    <Route exact path="/intro" component={Intro} />
                    <Route exact path="/menu" component={Menu} />
                    <Route exact path="/pokedex" component={Pokedex} />
                    <Route exact path="/team" component={Team} />
                    <Route component = {NotFound} />
                </Switch>

*/

export default App