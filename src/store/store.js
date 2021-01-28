import { configureStore } from '@reduxjs/toolkit'
import { toDoReducer}  from './slice'

const store = configureStore({
  reducer: {
      
    toDoReducer : toDoReducer}
})

export default store