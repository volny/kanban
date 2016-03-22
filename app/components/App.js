import React, { Component } from 'react'
import { generateID } from '../helpers/utils'
import Notes from './Notes'

const notes = [
  {
    id: generateID(),
    task: `Learn Webpack`
  },
  {
    id: generateID(),
    task: `Learn React`
  },
  {
    id: generateID(),
    task: `Do Laundry`
  }
]

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      notes
    }
  }
  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([{
        id: generateID(),
        task: 'New task'
      }])
    })
  }
  editNote = (id, task) => {
    if (!task.trim()) {
      return
    }

    const notes = this.state.notes.map(note => {
      if (note.id === id && task) {
        note.task = task
      }
      return note
    })
    this.setState({notes})
  }
  deleteNote = (id, e) => {
    e.stopPropagation()
    const notes = this.state.notes.filter(
      note => note.id !== id
    )
    this.setState({notes})
  }
  render() {
    return (
      <div>
        <button onClick={this.addNote}>Add note</button>
        <Notes
          notes={this.state.notes}
          onEdit={this.editNote}
          onDelete={this.deleteNote}/>
      </div>
    )
  }
}
