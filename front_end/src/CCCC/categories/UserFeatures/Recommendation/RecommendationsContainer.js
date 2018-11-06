import './RecommendationsContainer.css'
import RecommendationsList from './RecommendationsList'
import ReactDOM from 'react-dom';
import axios from 'axios'
import React from 'react'
import { Button } from 'semantic-ui-react'
import './Card.css'
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom'
import { CategoryIdRetrievalSuccess } from '../../../../actions/user'


 class RecommendationsContainer extends React.Component {

  state = {
    reviews: [],
    inputField: '',
    pulledData: [],
    buttonClick: false,
    xxxx: ''
  }



  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/recommendations/')
     .then(res => res.json())
     .then( json => this.setState({pulledData: json}))


  }

  refetch = () => {
    fetch('http://localhost:3001/api/v1/recommendations/')
     .then(res => res.json())
     .then( json => this.setState({
       pulledData: json,
       buttonClick: !this.state.buttonClick
     }))
  }

  fetchAgain = () => {
    fetch('http://localhost:3001/api/v1/recommendations/')
     .then(res => res.json())
     .then( json => this.setState({pulledData: json}))
  }


  updateInputField = (e) => {
    this.setState({
      inputField: e.target.value,
    })

  }

  updateReviews = (e) => {



    console.log(this.state.inputField);
    e.preventDefault();
    this.setState({
      reviews: [...this.state.reviews, this.state.inputField],
      inputField: ''

    })
    let reviewName = this.state.inputField

    let options = {
      method: 'POST',
      body: JSON.stringify({'review': reviewName, 'user_id': 12}),
      headers: {
      "Content-Type": 'application/json',
      Accept: 'application/json'
    }

  }

    fetch('http://localhost:3001/api/v1/recommendations', options)
    .then(res => this.fetchAgain())

    }







  render(){
    console.log(this.props);
    console.log(this.state.pulledData);
    console.log(this.state.inputField);



    return (
      <div className='recommendations'>

        <h3 onClick={this.onClick}>Review Center</h3>



      <div className='RecommendationsContainer'>
        <div className='reviews'>
        </div>
        <div className='formfield'>
        <form  onSubmit={this.updateReviews}>

      <RecommendationsList pulledData={this.state.pulledData} reviews={this.state.reviews} />
        <div className='center' >

      <textarea value={this.state.inputField}  onChange={this.updateInputField} rows="2" cols="20"></textarea>
      <br></br> <br></br>

      <Button color='olive'>Add Suggestion</Button>

      </div>
        </form>
        </div>

      </div>
      <div className='d'>
      <div>l</div>
        <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>
          <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>
            <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>  <div>l</div>
      </div></div>
    )
  }
}

function mapStateToProps(state) {
  return  {
    categoryId: state.fetchCategoryData.categoryId
  }

}


export default withRouter(connect(mapStateToProps, {CategoryIdRetrievalSuccess})(RecommendationsContainer));
