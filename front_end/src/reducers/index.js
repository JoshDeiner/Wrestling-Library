import { combineReducers } from 'redux'
import { authentication } from './authentication'
import { fetchCategoryData } from './CategoryData'
import { fetchSocketId } from './socketsReducer'

const rootReducer = combineReducers({
  authentication,
  fetchCategoryData,
  fetchSocketId
})

export default rootReducer
