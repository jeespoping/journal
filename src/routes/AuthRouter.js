import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import LoginScreen from '../components/auth/LoginScreen';    
import RegisterScreen from '../components/auth/RegisterScreen';

export default function AuthRouter() {
    return (
        <div className="auth__main">
            <div className="auth_box-container">
                <Switch>
                    <Route  
                        exact
                        path="/auth/login"
                        component={LoginScreen}
                    /> 
                    <Route 
                        exact
                        path="/auth/register"
                        component={RegisterScreen}
                    />
                    <Redirect 
                        to="/auth/login"
                    />
                </Switch>
            </div>
        </div>
    )
}
