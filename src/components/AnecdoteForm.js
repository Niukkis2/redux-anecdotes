import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
  const addAnecdote = (event) => {
    event.preventDefault()
    props.createAnecdote(event.target.content.value)
    event.target.content.value = ''
  }
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="content"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  createAnecdote,
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)