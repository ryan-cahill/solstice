import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import UtilityDataFullPage from '../containers/UtilityDataFullPage'
import AdminPage from "../containers/AdminPage";

class RouteController extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={UtilityDataFullPage}/>
                <Route exact path='/admin' component={AdminPage}/>
            </Switch>
        )
    }
}

export default RouteController;