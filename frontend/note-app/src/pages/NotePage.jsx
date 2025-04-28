import { MdArrowBackIos } from "react-icons/md";
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function NotePage() {

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

    return (
        <div className='note'>
            <div className="note-header">
                <h3>
                    <Link to="/">
                        <MdArrowBackIos />
                    </Link>
                </h3>
            </div>
            <textarea defaultValue={note?.body}></textarea>
        </div>
    )
}
export default NotePage