import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addtoDo } from '../store/slice'

export const AddToDo = () => {
    const dispatch = useDispatch()
    const [id,setID] = useState(0)
    const [desc,setDesc] = useState("")
    let todo = { 
        id: id,
        desc: desc,
        done: false
    }
    console.log("id",id)
    function handleSubmit (){
        dispatch(addtoDo(todo))
        setID(id+1)
        setDesc("")
    }
    return (
        <div>
        <label> To Dos
        <input
        value={desc}
        type="text"
        placeholder="Thing to do "
        onChange={({ target }) => setDesc(target.value)}
        />
        </label>
        <button
        onClick={() => handleSubmit()}
        >Add Todo</button> 
            
    </div>
    )
}
