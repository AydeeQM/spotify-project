import createStore from 'redux-zero'
//import {image, audio, title} from './data'
import {playList} from './data'
import {playNews} from './data'

const index = 0
const initialState = {
   playList: playList,
   playNews: playNews,
   marker: true,

}

const store = createStore(initialState)
export default store