import createStore from 'redux-zero'
import {playList} from './data'

const index = 0
const initialState = {
   playList: playList,
   marker: true,

}

const store = createStore(initialState)
export default store