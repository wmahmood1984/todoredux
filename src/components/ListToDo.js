import React,{useState} from 'react'
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

    let [status,setStatus]=useState("all")
    return (
        <div>
            Todos Filter
            
            <button onClick={()=>{setStatus("all")}}>show All records</button>
            <button onClick={()=>{setStatus("completed")}}>show completed records</button>
            <button onClick={()=>{setStatus("not completed")}}>show non-complete records</button>

             {
                status==="all"?
                // eslint-disable-next-line
                toDoList.map((todo)=>{
                
                return <div key={todo.id}>
                <button onClick={()=>updateItem(todo.id)}>mark complete</button>
                <span>{todo.id}</span>
                <span>{todo.desc}</span>
                <span>{todo.done? "  completed" : "  not completed"}</span>
                </div>})

                :

                status==="completed"?
// eslint-disable-next-line
                toDoList.map((todo)=>{
                    if(todo.done===true){
                    return <div key={todo.id}>
                    <button onClick={()=>updateItem(todo.id)}>mark complete</button>
                    <span>{todo.id}</span>
                    <span>{todo.desc}</span>
                    <span>{todo.done? "  completed" : "  not completed"}</span>
                    </div>}})

                : 
// eslint-disable-next-line
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
