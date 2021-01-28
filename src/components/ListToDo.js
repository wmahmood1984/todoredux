import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { updatetoDo } from '../store/slice'

export const ListToDo = () => {
    const dispatch = useDispatch()
    const toDoList = useSelector((state)=>{
        return state.toDoReducer.todos;
    }

    )

    function updateItem (itemId){
        dispatch(updatetoDo(itemId))
        
    }

    console.log(toDoList)
    return (
        <div>
            Todos {
                toDoList.map((todo)=>{
                if(todo.done===false){
                return <div key={todo.id}>
                <button onClick={()=>updateItem(todo.id)}>mark complete</button>
                <span>{todo.id}</span>
                <span>{todo.desc}</span>
                <span>{todo.done? "  completed" : "  not completed"}</span>
                </div>}})
            }
        </div>
    )
}
