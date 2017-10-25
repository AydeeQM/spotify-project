import createStore from 'redux-zero'
//import {image, audio, title} from './data'
import {playList, genresList} from './data'

const index = 0
const initialState = {
   playList: playList,
   marker: true,
   genresList :genresList

}

const store = createStore(initialState)
export default store