import axios from 'axios'
import store from '../store'
import io from 'socket.io-client'


axios.defaults.baseURL = '/api'

const socket = io.connect('http://localhost:3001')

export function addMessage(message) {
    socket.emit('new message', {
        message: message
    })

}

socket.on('new message', (message) => {
    store.dispatch({
        type:'ADD_MESSAGE',
        payload: message
    })
})

