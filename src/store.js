import createStore from 'redux-zero'
import {image, audio, title} from './data'

const index = 0
const initialState = {
   index : index,
   image: 'img/' + image[index],
   audio: audio[index],
   title: title[index],
   marker: true,

}

const store = createStore(initialState)
export default store