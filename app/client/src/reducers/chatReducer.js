const initialState = {
  chat: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    // add actions here
    case 'GET_CHAT':
      return {...state, chat: action.payload}
    default:
      return state
  }
}