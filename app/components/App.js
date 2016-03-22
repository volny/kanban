import React, { Component } from 'react'
import { generateID } from '../helpers/utils'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: [
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
    }
  }
  // use AF to bind `this` to `App`
  addNote = () => {
    this.setState({
      // `concat` joins two arrays into a new one,
      // which is more functional (don't mutate the old array)
      notes: this.state.notes.concat([{
        id: generateID(),
        task: 'New task'
      }])
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.addNote}>Add note</button>
        <ul>
          {this.state.notes.map(note => <li key={note.id}>{note.id}: {note.task}</li>)}
        </ul>
      </div>
    )
  }
}
