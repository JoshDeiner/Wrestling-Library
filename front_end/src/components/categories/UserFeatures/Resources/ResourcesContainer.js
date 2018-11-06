import React from 'react'
import './Resources.css'
import ResourcesList from './ResourcesList'
import { UncontrolledAlert } from 'reactstrap';
import { Search, Grid, Header } from 'semantic-ui-react'

import YoutubeComponent from '../../YoutubeFunctionality/YoutubeComponent'



export default class ResourcesContainer extends React.Component {

  state = {
    resources: [],
    inputValue: '',
    inputField: [],
    newResources: []

  }



  updateSearch = (e) => {
    console.log(e.target);
    this.setState({
      inputValue: e.target.value
    })
  }




  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/user_resources')
    .then(res => res.json())
    .then(json => this.setState({resources: json}))

  }

  refetch = () => {
    fetch('http://localhost:3001/api/v1/user_resources')
    .then(res => res.json())
    .then(json => this.setState({resources: json}))
  }

  removeResource = (rId, props) => {
    let oldTitle = this.state.resources.wrestling_name;
    let oldImage = this.state.resources.image_url;
    let oldLink = this.state.resources.source_link
    let oldDescription = 'no description'
    let oldObj = {title:oldTitle, description:oldDescription, link:oldLink, image:oldImage}


    if (props.resource) {
      console.log(props.resource);

      fetch(`http://localhost:3001/api/v1/old_stuffs`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({title: props.resource.wrestling_name, description: 'nothing', link: props.resource.source_link, image: props.resource.image_url})
      })

      fetch(`http://localhost:3001/api/v1/user_resources/${rId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
          body: JSON.stringify({id: rId})
        })
        .then(resp => alert('Item has been removed'))
        .then(resp => this.refetch())

    }


  }


  addToOldItemsApi = (props) => {


  }




  render(){
//     <form onChange ={this.refetch}>
// </form>this.state.resources
console.log(this.state.resources);


    return (
      <div>

        <h3>Your Checked out Items</h3>
        <div className='input'>
          <br></br>
          <input type='input' onChange={this.updateSearch} value={this.state.inputValue} placeholder='find resource'></input>
          </div>
          <br></br><br></br>


          <div className='resourcescontainer'>

          <div className='flex-container'>

        <ResourcesList inputValue={this.state.inputValue} addToOldItemsApi={this.addToOldItemsApi} removeResource={this.removeResource} resources={this.state.resources} />


          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br>

          </br><br></br><br></br><br></br>

    </div>
    </div>




      </div>
    )
  }
}
