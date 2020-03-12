import { createStore, applyMiddleware,combineReducers } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import { Message } from "./Reducers/Message";
import { User } from "./Reducers/User";
let socket = io('http://localhost:3000');
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

let reducers = combineReducers({
User,
Message
})
export default store = applyMiddleware(socketIoMiddleware)(createStore)(reducers);
store.dispatch({type:'server/test', data:'Hello!'});