import React from 'react'

export default class OtherMessagesCard extends React.Component {

  state = {
    currentUser: []
  }

  componentDidMount = () => {
    fetch(`http://localhost:3001/current_users`)
    .then(res => res.json())
    .then(json =>  console.log(json)
    )

  }

  render(){
    console.log(this.state.currentUser);

    return(
      <div>
        <li>
          {this.props.user ? <h4>{this.props.user} - {this.props.message.text}</h4> :
           <h4>{this.props.message.text} </h4>
         }




        </li>



      </div>
    )
  }
}
