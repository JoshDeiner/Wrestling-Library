// import React from 'react'
//
//
// const LegendsList = (props) => {
//
//   function mappedLegends() {
//     return (
//       <div>d</div>
//     )
//   }
//
//
//
//
//
//
//   return (
//   <div>d</div>
//   )
//
// }
//
//
//
//
// export default LegendsList


import React from 'react'
import LegendsCard from './LegendsCard'


const LegendsList = (props) => {
  let mappedLegends = props.legends.map(legend => {

    return <LegendsCard legend={legend} key={legend.id} />
  })
  return (
    <div>

      {mappedLegends}

    </div>
  )
}

export default LegendsList
