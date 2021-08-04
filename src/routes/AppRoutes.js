import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Redirect, Switch} from 'react-router-dom'
import JournalScreen from '../components/journal/JournalScreen';
import AuthRouter from './AuthRouter';
import {firebase} from '../firebase/firebase-config';
import {useDispatch} from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';


export default function AppRoutes() {

    const dispatch = useDispatch();

    const [checking, sEtchecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));                
                
                dispatch(startLoadingNotes(user.uid));
                setIsLoggedIn(true);
            }else{
                setIsLoggedIn(false);
            }
            sEtchecking(false);
        })
    }, [dispatch, sEtchecking, setIsLoggedIn])

    if(checking){
        return(
            <h1>Await ...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        isAuthenticated={isLoggedIn}
                        path="/auth"
                        component={AuthRouter}
                    />

                    <PrivateRoute
                        isAuthenticated={isLoggedIn} 
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
