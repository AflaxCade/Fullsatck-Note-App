import { MdArrowBackIos } from "react-icons/md";
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate  } from 'react-router-dom'

function NotePage() {

    const navigate = useNavigate()
    const { id: noteId } = useParams()
    const [note, setNote] = useState(null)

    useEffect(() => {
        getNote()
    }, [noteId])

    const getNote = async () => {
        if (noteId === 'new') return
        const response = await fetch(`/api/notes/${noteId}`)
        const data = await response.json()
        setNote(data)
    }

    const createNote = async () => {
        fetch('/api/notes/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    const updateNote = async () => {
        fetch(`/api/notes/${noteId}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    const deleteNote = async () => {
        fetch(`/api/notes/${noteId}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        navigate('/')
    }

    console.log(note)

    const handleSubmit = () => {
        if (noteId !== 'new' && note.body === '') {
            deleteNote()
        } else if (noteId !== 'new') {
            updateNote()
        } else if (noteId === 'new' && note.body !== null) {
            createNote()
        }
        navigate('/')
    }

    return (
        <div className='note'>
            <div className="note-header">
                <h3>
                    <MdArrowBackIos onClick={handleSubmit} />
                </h3>
                {noteId !== 'new' ? (<button onClick={deleteNote}>Delete</button>) : (<button onClick={handleSubmit}>Save</button>)}
                
            </div>
            <textarea onChange={(e) => setNote({ ...note, 'body': e.target.value })} value={note?.body}></textarea>
        </div>
    )
}
export default NotePage