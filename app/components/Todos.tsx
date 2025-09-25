"use client"

import { useEffect, useState } from "react"
import { TodoComponent } from "./TodoComponent"
import { TodoInput } from "./TodoInput"
import { useTodoStore } from "@/store/todoStore"
import { addToTodosField, checkTodo, getTodosField, getTodosinField } from "../actions/user"
import { useInTodoStore } from "@/store/todosinStore"
interface todosprops{
    label:string,
    key:string,
    inField:boolean,
    checked:boolean
}


type Todolist = todosprops[]


export const Todos = ()=>{

    // const [todos,setTodos] = useState<Todolist>([])
    const todos = useInTodoStore((state)=>state.todos)
    const setTodos = useInTodoStore((state)=>state.setTodos)
    const addTodos = useTodoStore((state)=>state.addTodo)
    const checkTodosinStore = useInTodoStore((state)=>state.checkTodo)
    const deleteinstore = useInTodoStore((state)=>state.deleteTodo)
    const [task,setTask] = useState("")
    

    useEffect(()=>{
        let isMounted = true
        async function fetchTodos(){

            const todos = await getTodosinField()
            if(isMounted){
                setTodos(todos)
            }
        }
        fetchTodos()
        return ()=>{
            isMounted = false
        }
    },[])
    
    function addTask(){
    {
        if(task==""){
            return
        }
        setTodos([
        ...todos,
        {label:task,weeklyId:task,checked:false,id:"123"}
        ])
                

    }
 }

    
    return <div className="flex flex-col items-center">
        <div className="font-bold text-3xl lg:text-4xl ">Todos</div>

        <div className="border h-64 w-64">
            <button className="bg-pink-400 text-white hover:bg-pink-500 cursor-pointer" onClick={()=>{
                todos.map(async(item)=>{
                    if(item.checked==true){
                        deleteinstore(item.id)
                        const todo = await addToTodosField(item.id)
                        addTodos(todo)
                        console.log(todos)
                    }else{
                        item
                    }
                })
            }}>flush</button>
            {todos.map((Todo) =>
            <TodoComponent key={Todo.id}  label={Todo.label} checked={Todo.checked} onCheck={async()=>{
                            let id = todos.filter(item => item.id === Todo.id)[0].id
                            const todo = await checkTodo(id)
                            checkTodosinStore(id)
                        }} />)}
            
            
        </div>
        <div>
            <TodoInput onChange={(e)=>{
                setTask(e.target.value)
            }} onClick={addTask}/>

        </div>

    </div>
}