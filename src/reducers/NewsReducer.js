import { FETCH_NEWS } from '../actions/actionsTypes'

const INITIAL_DATA = []

const NewsReducer = (state = INITIAL_DATA, action) => {
  let updateState = action.type === FETCH_NEWS ? action.value : state
  return updateState
}

export default NewsReducer
