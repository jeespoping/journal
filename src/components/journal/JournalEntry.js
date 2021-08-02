import React from 'react'

export default function JournalEntry() {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://acefootball.com/da/wp-content/uploads/sites/2/2021/05/GettyImages-1253136830.jpg)'
                }}
            ></div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                    Commodo aliqua quis ullamco ea officia non consectetur esse duis aute id sint tempor reprehenderit.
                </p>                  
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
