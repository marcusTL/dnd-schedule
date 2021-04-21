import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Frontpage from './Frontpage';
import About from './About';
import DnDsearch from './DnDsearch';
import SpellDetails from './spellDetails';

class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Frontpage} />
                    <Route path='/About' component={About} />
                    <Route path='/DnDsearch' component={DnDsearch} />
                    <Route path='/spellDetails' component={SpellDetails}/>

                </Switch>
            </div>

        );
    }
}
export default Main;