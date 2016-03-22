import React from 'react'
import Note from './Note'

export default ({notes, onEdit}) => {
  return (
    <ul>
      {notes.map(note =>
        <li key={note.id}>
          <Note
            id={note.id}
            task={note.task}
            onEdit={onEdit.bind(null, note.id)}/>
        </li>
      )}
    </ul>
  )
}
