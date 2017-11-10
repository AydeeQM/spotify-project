import createStore from 'redux-zero'
//import {image, audio, title} from './data'
import {playList, genresList, playNews} from './data'

const index = 0
const initialState = {
   playList: playList,
   playNews: playNews,
   marker: true,
   genresList :genresList

}

const store = createStore(initialState)
export default store