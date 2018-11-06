import React from 'react';
import { API_ROOT, HEADERS } from '../../../constants/index';
import { Button } from 'semantic-ui-react'

class NewMessageForm extends React.Component {
  state = {
    text: '',
    conversation_id: this.props.conversation_id,
    messages: [],
    user_name: this.props.user.username
  };

  componentDidMount = () => {
    fetch(`${API_ROOT}/messages`).then(res => res.json()).then(messages => this.setState({messages}))
    if (this.props.user) {
      this.setState({
        user_name: this.props.user.username
      })
    }
  }

  refetch = () => {
    fetch(`${API_ROOT}/messages`).then(res => res.json()).then(messages => this.setState({messages}))

  }

  componentWillReceiveProps = nextProps => {
    console.log(nextProps);
    // console.log(nextProps);
    this.setState({ conversation_id: nextProps.conversation_id});
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch(`${API_ROOT}/messages`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(this.state)
    });
    this.setState({ text: '' });
  };

  render = () => {
    return (
      <div className="newMessageForm">
        <form onSubmit={this.handleSubmit}>
          <label>New Message:</label>
          <br />
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        <br></br><br></br><Button color='big purple button' onClick={this.props.refetchAllMessages}>submit</Button>
        </form>
      </div>
    );
  };
}

export default NewMessageForm;
