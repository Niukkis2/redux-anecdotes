const initialState = ''

export const setFilter = (filterString) => {
  return {
    type: 'FILTER',
    data: filterString
  }
}

export const clearFilter = () => {
  return {
    type: 'CLEAR',
    data: ''
  }
}

const filterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FILTER':
      return action.data
    case 'CLEAR':
      return action.data
    default:
      return state
  }
}

export default filterReducer