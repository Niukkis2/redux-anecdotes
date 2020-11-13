import anecdoteService from "../services/anecdoteService"

const asObject = (anecdote) => {
  return {
    content: anecdote,
    votes: 0
  }
}

export const incrementVotes = (anecdote) => {
  return async dispatch => {
    await anecdoteService.updateVotes(anecdote.id, anecdote)
    dispatch({
      type: 'VOTE',
      data: { id: anecdote.id }
    })
  }
}

export const createAnecdote = (anecdote) => {
  return async dispatch => {
    await anecdoteService.createNew(asObject(anecdote))
    dispatch({
      type: 'CREATE',
      data: anecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote => 
        anecdote.id !== id ? anecdote : changedAnecdote)
    case 'CREATE':
      return [...state, asObject(action.data)]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export default anecdoteReducer