const initialNotification = {
  message: '',
  style: {
    display: 'none'
  }
}

const showNotification = (message, timeOutID) => {
  return {
    type: 'SHOW_NOTIFICATION',
    data: {
      message: message,
      style: {
        border: 'solid',
        padding: 10,
        borderWidth: 1
      },
      timeOutID: timeOutID
    }
  }
}

const hideNotification = () => {
  return {
    type: 'HIDE_NOTIFICATION',
    data: {
      message: '',
      style: {
        display: 'none'
      }
    }
  }
}

export const createNotification = (message, timeout, lastTimeOutID) => {
  clearTimeout(lastTimeOutID)
  return async dispatch => {
    const timeOutID = setTimeout(() => {
      dispatch(hideNotification())
    }, timeout * 1000)
    dispatch(showNotification(message, timeOutID))
  }
}

const notificationReducer = (state = initialNotification, action) => {
  switch(action.type) {
    case 'SHOW_NOTIFICATION':
      return action.data
    case 'HIDE_NOTIFICATION':
      return action.data
    default:
      return state
  }
}

export default notificationReducer