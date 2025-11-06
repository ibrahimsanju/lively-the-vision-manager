"use client"

import { useEffect } from "react"
import { TodoComponent } from "./TodoComponent"
import { useTodoStore } from "@/store/todoStore"
import { addToTodosField, checkTodo, getTodosinField } from "../actions/user"
import { useInTodoStore } from "@/store/todosinStore"
import { Button } from "@/components/ui/button"



export const Todos = ()=>{

    // const [todos,setTodos] = useState<Todolist>([])
    const todos = useInTodoStore((state)=>state.todos)
    const setTodos = useInTodoStore((state)=>state.setTodos)
    const addTodos = useTodoStore((state)=>state.addTodo)
    const checkTodosinStore = useInTodoStore((state)=>state.checkTodo)
    const deleteinstore = useInTodoStore((state)=>state.deleteTodo)
 
    

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
    },[setTodos])
    
//     function addTask(){
//     {
//         if(task==""){
//             return
//         }
//         setTodos([
//         ...todos,
//         {label:task,weeklyId:task,checked:false,id:"123"}
//         ])
                

//     }
//  }

 async function flushTodos() {
    for (const item of todos) {
        if (item.checked) {
            deleteinstore(item.id)
            const todo = await addToTodosField(item.id)
            addTodos(todo)
        }
    }
}

    
    return <div className="flex flex-col items-center ">
        <div className="font-bold text-3xl lg:text-3xl ">Todos</div>

        <div className="border h-64 w-90">
            <Button className=" bg-pink-400 text-white hover:bg-pink-500 cursor-pointer" onClick={flushTodos}>flush</Button>
            {todos.map((Todo) =>
            <TodoComponent key={Todo.id}  label={Todo.label} checked={Todo.checked} onCheck={
            async()=>{
                await checkTodo(Todo.id)
                checkTodosinStore(Todo.id)
            }} />)}
        </div>
            
    
            
        <div>
            {/* <TodoInput onChange={(e)=>{
                setTask(e.target.value)
            }} onClick={addTask}/> */}

        </div>

    </div>
}