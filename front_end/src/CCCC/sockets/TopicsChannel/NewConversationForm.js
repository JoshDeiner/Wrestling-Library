import React from 'react';
import { API_ROOT, HEADERS } from '../../../constants/index';
import { Button } from 'semantic-ui-react'
import {Route, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchSocketId } from '../../../actions/user'

class NewConversationForm extends React.Component {
  state = {
    title: ''
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleSubmit = e => { //cateogry id, neew convo form. title in conversation
    e.preventDefault()
    fetch(`${API_ROOT}/conversations`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({title: this.state.title, category_id: this.props.socketId}) // was four
    });
    this.setState({ title: ''});
  };

  render = () => {

    return (
      <div className="newConversationForm">
        <form onSubmit={this.handleSubmit}>
          <label>New Conversation:</label>
          <br />
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          /> <br></br><br></br>
        <Button color='big green button'>Submit</Button>

        </form>
      </div>
    );
  };
}


function mapStateToProps(state) {


  return {
    socketId: state.fetchSocketId

  }
}

export default withRouter(connect(mapStateToProps, { fetchSocketId}) (NewConversationForm))
