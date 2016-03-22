import React, { Component } from 'react'

export default class Note extends Component {
  constructor() {
    super()
    this.state = {
      editing: false
    }
  }
  handleItemClick = () => {
    this.setState({
      editing: true
    })
  }
  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.handleFinishEdit(e)
    }
  }
  handleFinishEdit = (e) => {
    if (this.props.onEdit) {
      this.props.onEdit(e.target.value)
    }
    this.setState({
      editing: false
    })
  }
  render() {
    if (this.state.editing) {
      // ????
      const ref = (e) => e ? e.selectionStart = this.props.task.length : null
      return (
        <input
          type='text'
          ref={ref}
          autoFocus={true}
          defaultValue={this.props.task}
          onBlur={this.handleFinishEdit}
          onKeyDown={this.handleKeyDown}/>
      )
    }
    return (
      <div onClick={this.handleItemClick}>
        <span>{this.props.id}: {this.props.task}</span>
        {this.props.onDelete
          ? <button onClick={this.props.onDelete}>Delete</button>
          : null
        }
      </div>
    )
  }
}
