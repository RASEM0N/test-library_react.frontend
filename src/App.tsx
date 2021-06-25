import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Edit from './pages/Edit'
import NotFound from './pages/NotFound'

const App = () => {
    return (
        <div className="wrapper">
            {/*<Navbar/>*/}
            <Switch>
                <Route exact component={Home} path="/" />
                <Route component={Create} path="/create" />
                <Route component={Edit} path="/edit/:bookId" />
                <Route exact component={NotFound} path="*" />
            </Switch>
        </div>
    )
}

export default App
