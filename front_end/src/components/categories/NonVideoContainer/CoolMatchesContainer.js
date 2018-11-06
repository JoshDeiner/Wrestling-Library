import React from 'react'
import './coolmatches.css'
import MatchCard from './MatchCard'
import { connect } from 'react-redux'
import NextPage from './NextPage'

;

const mapStateToProps = state => {
  // console.log(state.authentication.resources.specialMatches);
  // console.log(state.authentication.resources.diet);
  if(state.authentication.resources.specialMatches === undefined) {
    console.log('no matches');
  } else {
    console.log('matches');
  }
  return {resources: state.authentication.resources.specialMatches}
}

const gottenState = ({ resources }) => {
  console.log(resources)



  let mappedMatches =

   resources.map(match => {
     // console.log(match.id);
    return  <MatchCard className='matchescontainer' id={match.id} key={match.id} match={match} />

    })
    return <div className='matchescontainer'>{mappedMatches}</div>;

  };


let CoolMatchesContainer = connect(mapStateToProps)(gottenState)

export default CoolMatchesContainer
// export default  NextPageContainer
