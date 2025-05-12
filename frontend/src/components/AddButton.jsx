import React from 'react'
import { Link } from 'react-router-dom'
import { MdAdd } from "react-icons/md";

const AddButton = () => {
  return (
    <Link to="/note/new" className='floating-button'>
        <MdAdd />
    </Link>

  )
}

export default AddButton