import axios from 'axios'
import store from '../store'
import io from 'socket.io-client'

axios.defaults.baseURL = '/api'

const socket = io.connect()

export function makeACall() {
  axios.get('/chatroom').then(resp => {
    store.dispatch({
      type: 'GET_CHAT', 
      payload: resp.data.chat
    })
  })
}