import React from 'react'
import Note from './Note'

export default ({notes}) => {
  return (
    <ul>
      {notes.map(note =>
        <li key={note.id}>
          <Note id={note.id} task={note.task}/>
        </li>
      )}
    </ul>
  )
}
