const initialState = {
  socketId: 0
}

export function fetchSocketId(state=initialState, action) {
  console.log('sockets', state, action);
  switch(action.type) {
    case 'GET_SOCKET_ID':
      return action.socketId


    default:
      return state
  }

}
