const initialState = {
  messages: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    // add actions here
    case 'ADD_MESSAGE':
      return {...state, message: [...state.message, action.payload]}
    default:
      return state
  }
}