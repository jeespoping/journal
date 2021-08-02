import React from 'react';
import NotesAppBar from './NotesAppBar';

export default function NoteScreen() {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes_content">
                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                >
                </textarea>

                <div className="notes__image">
                    <img 
                        src="https://i.pinimg.com/originals/9a/c9/4d/9ac94da7e10527aa1c67a58530b2ef4e.jpg"
                        alt="imagen"
                    />
                </div>
            </div>
        </div>
    )
}
