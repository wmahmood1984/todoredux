import { createSlice } from "@reduxjs/toolkit";

const counterslice = createSlice({
    name: "CounterSlice",
    initialState : {
        todos: []
    },
    reducers : {
        addtoDo : (state,action) => { state.todos.push(action.payload)},
        updatetoDo : (state,action) => {state.todos[action.payload].done = true}
    }

})

export const {addtoDo, updatetoDo} = counterslice.actions

export const toDoReducer = counterslice.reducer