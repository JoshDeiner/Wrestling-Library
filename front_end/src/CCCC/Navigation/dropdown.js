import React from 'react'
import { Dropdown, Menu, Segment } from 'semantic-ui-react'
import '../../stylesheets/switchNav.css'
import { Link, Redirect} from 'react-router-dom'
import Logout from '../buttons/Logout'
import { connect } from 'react-redux'
import {Route, withRouter} from 'react-router-dom'
import { fetchCategoryId, CategoryIdRetrievalSuccess, fetchCategoryName } from '../../actions/user'


class MenuExampleInvertedSegment extends React.Component {
  state = {
    activeItem: 'home',
    clicked: false,
    id: ''
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  onClick =(e) => {
    this.setState({id: this.props.CategoryIdRetrievalSuccess(e.target.id)})

  }

  renderHome = () => {
      return (

        <Menu.Item onClick={this.onClick} id ='/'>Home</Menu.Item>

        )
  }
  renderAbout = () => {
      return (

        <Menu.Item><div  onClick={this.onClick} id='about'>About</div></Menu.Item>

        )
  }
  renderResources = () => {
      return (

        <Dropdown.Header onClick={this.onClick} id='resources' > Your resources </Dropdown.Header>

        )
  }
  renderOld = () => {
      return (

        <Dropdown.Header onClick={this.onClick} id ='old_stuffs'>Old Stuff</Dropdown.Header>

        )
  }

  renderRecommendations = () => {
      return (

        <Dropdown.Header onClick={this.onClick} id='recommendations'>Site Advice</Dropdown.Header>

        )
  }

  renderAcknowledgments = () => {
      return (

        <Dropdown.Header onClick={this.onClick} id='acknowledgments' >Acknowledgments</Dropdown.Header>

        )
  }
  renderSummer = () => {
      return (

        <Dropdown.Header onClick={this.onClick} id ='summer'>Off Season Resources</Dropdown.Header>

        )
  }

  renderDiet = () => {
      return (

         <Dropdown.Header onClick={this.onClick} id='diet' >Nutritional Advice</Dropdown.Header>

        )
  }

  renderBooks = () => {
      return (

         <Dropdown.Header onClick={this.onClick} id='books'>Books</Dropdown.Header>

        )
  }

  renderLegends = () => {
      return (

         <Dropdown.Header onClick={this.onClick} id='memorable_wrestlers'> Legends </Dropdown.Header>

        )
  }

  renderChat = () => {
      return (

         <Menu.Item><div onClick={this.onClick} id='chat'>Talk Wrastling</div></Menu.Item>

        )
  }




  render() {
    const { activeItem } = this.state
//implement sections, training resources, fun reads, video resources






    return (
      <div>

        {this.state.id.categoryId ? <Redirect to ={this.state.id.categoryId}></Redirect> : null }

      <Segment inverted>
        <Menu.Item >
          <div className='library'>The Wrestling Library</div>

        </Menu.Item>
        <Menu inverted secondary>


          <Dropdown text='Your Moves' pointing className='link item'>

            <Dropdown.Menu>

              { this.props.location.pathname !== '/old_stuffs' ? this.renderOld() : null}



                <Dropdown.Divider />
                  { this.props.location.pathname !== '/resources' ? this.renderResources() : null}




              </Dropdown.Menu>

          </Dropdown>

          <Dropdown text='Tell Us How You Feel' pointing className='link item'>
            <Dropdown.Menu>
              { this.props.location.pathname !== '/recommendations' ? this.renderRecommendations() : null}



              <Dropdown.Divider />
                { this.props.location.pathname !== '/acknowledgments' ? this.renderAcknowledgments(): null}




            </Dropdown.Menu>
          </Dropdown>

          <Dropdown text='Training Resources' pointing className='link item'>
            <Dropdown.Menu>
              { this.props.location.pathname !== '/summer' ? this.renderSummer(): null}




              <Dropdown.Divider />
                { this.props.location.pathname !== '/diet' ? this.renderDiet() : null}


            </Dropdown.Menu>
          </Dropdown>

          <Dropdown text='Fun Reads' pointing className='link item'>
            <Dropdown.Menu>
              { this.props.location.pathname !== '/books' ? this.renderBooks(): null}


              <Dropdown.Divider />
                { this.props.location.pathname !== '/memorable_wrestlers' ? this.renderLegends(): null}



            </Dropdown.Menu>
          </Dropdown>


          { this.props.location.pathname !== '/chat' ? this.renderChat(): null}



          { this.props.location.pathname !== '/' ? this.renderHome() : null}

          { this.props.location.pathname !== '/about' ? this.renderAbout(): null}





        <Menu.Item>
          <Logout />
        </Menu.Item>

      </Menu>
  </Segment>



      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    fetchCategoryId : state.fetchCategoryData.categoryId
  }
}



export default withRouter(connect(mapStateToProps, {fetchCategoryId, CategoryIdRetrievalSuccess, fetchCategoryName})(MenuExampleInvertedSegment))
