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
        const response = await fetch(`/api/notes/${noteId}`)
        const data = await response.json()
        setNote(data)
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

    const handleSubmit = async (e) => {
        updateNote()
        navigate('/')
    }

    return (
        <div className='note'>
            <div className="note-header">
                <h3>
                    <MdArrowBackIos onClick={handleSubmit} />
                </h3>
            </div>
            <textarea onChange={(e) => setNote({ ...note, 'body': e.target.value })} defaultValue={note?.body}></textarea>
        </div>
    )
}
export default NotePage