"use client"

import { useState } from "react"
import { TodoComponent } from "./TodoComponent"
import { TodoInput } from "./TodoInput"

interface todosprops{
    label:string,
    key:string
}


type Todolist = todosprops[]
export const TodoList = ()=>{

    const [todos,setTodos] = useState<Todolist>([])
    const [task,setTask] = useState("")
    function addTask(){
    {
        if(task==""){
            return
        }
        setTodos([
        ...todos,
        {label:task,key:Math.random().toString()}
        ])
                

    }
 }

    
    return <div>

        <div className="border  ">
            {todos.map(Todo =>
            <TodoComponent label={Todo.label} key={Todo.key} />)}
            
            
        </div>
        <div>
            <TodoInput onChange={(e)=>{
                setTask(e.target.value)
            }} onClick={addTask}/>

        </div>

    </div>
}