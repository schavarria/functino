import axios from 'axios'
import store from '../store'
import io from 'socket.io-client'


axios.defaults.baseURL = '/api'

const socket = io.connect('http://localhost:3001')

export function addMessage(message) {
    const username = store.getState().chatReducer.username
    console.log(message)
    socket.emit('new message', {
        roomname:message.roomname,
        username: username,
        message: message.message
    })

}

export function assignUsername(username){
    var promise = new Promise ((resolve, reject) => {
        store.dispatch({
            type: 'SIGN_IN',
            payload: username
        })

        resolve()
    })
    return promise
}

export function addChannel(channel){
    socket.emit('new channel', channel)
        
} 

socket.on('new channel', (channel) => {
    store.dispatch({
        type: 'ADD_CHANNEL',
        payload: channel
    })
})

socket.on('new message', (message) => {
    store.dispatch({
        type:'ADD_MESSAGE',
        payload: message
    })
})

