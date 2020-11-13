import React from 'react'
import { connect } from 'react-redux'
import { incrementVotes } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

  const handleVote = (anecdote) => {
    props.incrementVotes(anecdote)
    props.createNotification(
      `you voted '${anecdote.content}'`,
      5,
      props.timeOutID)
  }
  return (
    <div>
      {props.anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => handleVote(anecdote)}>vote</button>
        </div>
      </div>
    )}
    </div>
  )
}

const mapDispatchToProps = {
  createNotification,
  incrementVotes
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes
      .sort((a, b) => b.votes - a.votes)
      .filter(anecdote => anecdote.content.includes(state.filter)),
    timeOutID: state.notification.timeOutID
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  )(AnecdoteList)