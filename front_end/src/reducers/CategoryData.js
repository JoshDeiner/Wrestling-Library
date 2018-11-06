const initialState = {
  categoryId: '',
  categoryName: ''
}

export function fetchCategoryData(state=initialState, action) {
  switch(action.type) {
    case 'GET_CATEGORY_ID':
      return action.categoryId
    case 'GET_CATEGORY_NAME':
      return action.categoryName

    default:
      return state
  }

}


// PATH/chat/2
// //
// checkCategoryName = (action) => {
//   let path = this.props.location.pathname
//   switch(action) {
//     case 'PATH_ONE':
//       return <h2>name one</h2>
//     case 'PATH_TWO':
//       return <h2>name TWO</h2>
//
//     case 'PATH_THREE':
//       return <h2>name 3</h2>
//
//     case 'PATH_FOUR':
//       return <h2>name 4</h2>
//
//     case 'PATH_FIVE':
//       return <h2>name 5</h2>
//
//     case 'PATH_SIX':
//       return <h2>name 6</h2>
//
//     case 'PATH_SEVEN':
//       return <h2>name 7</h2>
//
//     case 'PATH_EIGHT':
//       return <h2>name 8</h2>
//
//     case 'PATH_NINE':
//       return <h2>name 9</h2>
//
//     case 'PATH_TEN':
//       return <h2>name 10</h2>
//
//     case 'PATH_ZERO':
//       return <h2>name 0</h2>
//
//
//   }
//
// }
//
// checkCategoryName = () => {
//   console.log('in');
//   let path = this.props.location.pathname
//   console.log(path);
//   if(path === '/chat/1') {
//     return (
//       <h2>name one</h2>
//     )
//
//   }
//   else if(path === '/chat/2') {
//     return (
//       <h2> name two </h2>
//   )
//   }
//   else if(path === '/chat/3') {
//     return (
//       <h2> name three </h2>
//   )
//   }
//   else if(path === '/chat/4') {
//     return (
//       <h2> name four </h2>
//   )
//   }
//   else if(path === '/chat/5') {
//     return (
//       <h2> name five </h2>
//   )
//   }
//   else if(path === '/chat/6') {
//     return (
//       <h2> name six </h2>
//   )
//   }
//   else if(path === '/chat/7') {
//     return (
//       <h2> name seven </h2>
//   )
//   }
//   else if(path === '/chat/8') {
//     return (
//       <h2> name eight </h2>
//   )
//   }
//   else if(path === '/chat/9') {
//     return (
//       <h2> name nine </h2>
//   )
//   }
//   else if(path === '/chat/10') {
//     return (
//       <h2> name ten </h2>
//   )
//   }
//   else if(path === '/chat/0') {
//     return (
//       <h2> name zero </h2>
//   )
//   }
