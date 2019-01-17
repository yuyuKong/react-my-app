import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route} from 'react-router-dom'; //引入路由
import Nav from './components/Nav';
import PageA from './components/PageA';
import PageB from './components/PageB';


// Render the main component into the dom
ReactDOM.render(
    //配置路由
    <Router>
        <div>
            <Nav/>
                <Route exact path="/" component={PageA} />
                <Route  path="/PageB" component={PageB} />

        </div>
    </Router>,
    document.getElementById('app')
);
