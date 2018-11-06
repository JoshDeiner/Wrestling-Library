export const createUser = ({username, password, password_confirmation}, history) => {

  return (dispatch) => {
    let options = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        Accept:'application/json'
      },
      body: JSON.stringify({user: {username, password, password_confirmation}})
    }
    fetch('https://api-frontpage.herokuapp.com/users', options)
      .then(res => res.json())
      .then(json => {
        if(json.errors) {
          console.log(json.errors)
        } else {
          localStorage.setItem('token', json.token)
          dispatch({
            type: 'CREATE_USER',
            payload: json.user
          })
          history.push('/')
        }
      })
  }
}

export const loginUser = ({username, password}, history) => {
  return (dispatch) => {
    let options = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        Accept:'application/json'
      },
      body: JSON.stringify({username, password})
    }
    fetch('https://api-frontpage.herokuapp.com/login', options)
      .then(res => res.json())
      .then(json => {
        if(json.errors) {
          console.log(json.errors)
        } else {
          localStorage.setItem('token', json.token)
          dispatch({
            type: 'CREATE_USER',
            payload: json.user
          })
          history.push('/')
        }
      })
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}

export const getUser = () => {
  const token = localStorage.getItem('token')
  return (dispatch) => {
    fetch('https://api-frontpage.herokuapp.com/get_user', {
      headers: {
        "Authorization": token
      }
    })

    .then(res => res.json())

    .then(json => {
      if (json["error"]) {
        console.log(json)
      } else {
        dispatch({
          type: 'GET_USER',
          payload: json
        })
      }
    })
  }
}

export const CategoryIdRetrievalSuccess = (id) => {
  console.log(id);
  // console.log('iddln', id);

  return {
    type: 'GET_CATEGORY_ID',
    categoryId: id
  };
}



export const fetchCategoryId =(x) => {
  console.log(x);
  return (dispatch) => {



    dispatch(CategoryIdRetrievalSuccess('josh'))


  }


}


export const CategoryNameRetrievalSuccess = (name) => {
  // console.log('iddln', id);

  return {
    type: 'GET_CATEGORY_NAME',
    categoryName: name
  };
}

export const fetchCategoryName =(categoryName) => {
  return (dispatch) => {
    // this.setState({categoryData: id});
    // dispatch({
    //   type: 'GET_CATEGORY_ID'
    // })
    let name='josh';



    dispatch(CategoryNameRetrievalSuccess(name))


  }


}


export const socketIdRetrievalSuccess = (id) => {
  // console.log('iddln', id);

  return {
    type: 'GET_SOCKET_ID',
    socketId: id
  };
}


export const fetchSocketId =(id) => {
  return (dispatch) => {
    // this.setState({categoryData: id});
    // dispatch({
    //   type: 'GET_CATEGORY_ID'
    // })
    let name='josh';



    dispatch(CategoryNameRetrievalSuccess(name))


  }


}
