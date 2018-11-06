import React from 'react'
import RecommendationsCard from './RecommendationsCard'
import './RecommendationsContainer.css'

const RecommendationsList = (props) => {

// console.log(props.pulledData.review);
console.log(props.pulledData);
// console.log(props.reviews);

  // console.log(props.reviews);

  let reviewList =

        props.pulledData.map(item => {
          console.log(item.review);
          // console.log(review);
         return <RecommendationsCard review={item.review} key={item.review} />
       })


  return (
    <div className='list'>

      {props.reviews.length>0 ? reviewList : reviewList}


</div>
  )
}


export default RecommendationsList
