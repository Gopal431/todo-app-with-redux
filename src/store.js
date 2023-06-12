import { configureStore } from '@reduxjs/toolkit'
import todoSlider from './Reducers/TodoSlider'

export default configureStore({
 reducer: {
     toDo: todoSlider
 }
  
})