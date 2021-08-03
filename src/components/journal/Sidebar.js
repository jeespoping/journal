import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import JournalEntries from './JournalEntries';

export default function Sidebar() {
    
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        dispatch(startLogout());
    }

    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> Jesus</span>
                </h3>

                <button 
                    className="btn"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>

            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">
                    new Entry
                </p>
            </div>

            <JournalEntries />
        </aside>
    )
}
