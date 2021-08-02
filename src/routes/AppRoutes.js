import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import JournalScreen from '../components/journal/JournalScreen';
import AuthRouter from './AuthRouter';


export default function AppRoutes() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        path="/auth"
                        component={AuthRouter}
                    />
                    <Route 
                        exact
                        path="/"
                        component={JournalScreen}
                    />
                    <Redirect 
                        to="/auth/login"
                    />
                </Switch>
            </div>
        </Router>
    )
}
