import React from 'react'
// componentDidMount = ()

const initialState = {
  user: null
}

class AA extends React.Component {

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/special_matches')
    .then(res => res.json())
    .then(json => this.setState({
      matches: json
    }))
  }
  render(){
    return (
      <div>ddd</div>
    )
  }
}



export function authentication(state=initialState, action) {
  switch(action.type) {
    case 'CREATE_USER':
      return { user: action.payload}
    case 'LOGOUT':
      return { user: null }
    case 'GET_USER':
      return {user: action.payload}
    default:
      return state
  }
}
