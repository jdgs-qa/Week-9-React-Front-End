import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Marks from './marks';
import Details from './Details';
import ItemTable from './ItemTable'
    ;
class App extends Component {
    render() {
        return (
            <div className="container m-4">
                <Router>
                    <Route path="/testscores" component={Marks}></Route>
                    <Route path="/details" component={Details}></Route>
                    <Route path="/itemTable" component={ItemTable}></Route>
                </Router>

            </div>
        )
    }
}

export default App;