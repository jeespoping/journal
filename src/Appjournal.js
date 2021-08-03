import React from 'react';
import {Provider} from 'react-redux'
import AppRoutes from './routes/AppRoutes';
import { store } from './store/store';


export default function Appjournal() {
    return (
        <Provider store={store}>
            <AppRoutes />
        </Provider>
    )
}
