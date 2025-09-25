import { lazy, useEffect, useState } from "react"
import { TodoComponent } from "./TodoComponent"
import { useTodoStore } from "@/store/todoStore"
import { addTodos, addToTodosField, checkTodo, getTodosField } from "../actions/user"
import { useInTodoStore } from "@/store/todosinStore"

interface weeklyListProps{
    label:string,
    weeklyId?:string,
    checked:boolean
}

interface todosinterface {
    id: string;
    label: string;
    checked: boolean;
    inTodos: boolean;
    weeklyId: string;
}

interface weeklyTodosProps{
    monthlyId?:string,
    id:string
}



type Todoslist = todosinterface[]


export const WeeklyTodos = ({id}:weeklyTodosProps)=> {
    const setTodos = useTodoStore((state)=>state.setTodos)
    const addTodosStore = useTodoStore((state)=>state.addTodo)
    const addinTodoStore = useInTodoStore((state)=>state.addTodo)
    const checkTodoStore = useTodoStore((state)=>state.checkTodos)
    const deleteTodo = useTodoStore((state)=>state.deleteTodos)
    const Todos = useTodoStore((state)=>state.todos)
    const [todo,setTodo] = useState("")



    useEffect(()=>{
        let isMounted = true
        async function fetchTodos(id:string){

            const todos = await getTodosField(id)
            if(isMounted){
                setTodos(todos.filter(item => item.inTodos === false))
            }
        }
        fetchTodos(id)
        return ()=>{
            isMounted = false
        }
    },[])

    console.log({storeTodos:Todos})

    return <div className="border h-34 w-64 overflow-y-scroll">
        <div className="flex">
        
            <input type="text" className="border" onChange={(e)=>setTodo(e.target.value)} />
            <button className=" bg-blue-400" onClick={async()=> { const t = await addTodos(todo,id);addTodosStore({label:todo,weeklyId:id,id:t.id,checked:t.checked});}}>add</button>
        </div>
        <div>
            {Todos.filter(item => item.weeklyId == id).map((t)=><TodoComponent key={t.id} label={t.label} onClick={async()=>{
                const to = await addToTodosField(t.id)
                deleteTodo(to)
                addinTodoStore(to)
            }} onCheck={async()=>{
                let id = Todos.filter(item => item.id === t.id)[0].id
                const todo = await checkTodo(id)
                checkTodoStore(id)
            }} checked={t.checked} ></TodoComponent>)}
        </div>
        
    </div>
}