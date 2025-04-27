import { useState, useEffect } from 'react';
import ListItem from '../components/ListItem';

function NoteListPage() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        // const fetchNotes = async () => {
        //     try {
        //         const response = await fetch('http://localhost:3000/notes');
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok');
        //         }
        //         const data = await response.json();
        //         setNotes(data);
        //     } catch (error) {
        //         console.error('Error fetching notes:', error);
        //     }
        // };
        // fetchNotes();
        getNotes()
    }, []);

    let getNotes = async () => {
        let response = await fetch('/api/notes/')
        let data = await response.json()
        setNotes(data)

    }

    return (
    <div>
        <div className='note-list'>
            {notes.map((note, index) => (
                //<h3 key={index}>{note.body}</h3>
                <ListItem note={note} key={index} />
            ))} 
        </div>
    </div>
    );
}

export default NoteListPage;