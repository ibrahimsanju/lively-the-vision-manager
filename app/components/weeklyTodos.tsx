import {  useEffect, useState } from "react"
import { TodoComponent } from "./TodoComponent"
import { useTodoStore } from "@/store/todoStore"
import { addTodos, addToTodosField, checkTodo, getTodosField,deleteTodo } from "../actions/user"
import { useInTodoStore } from "@/store/todosinStore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// interface weeklyListProps{
//     label:string,
//     weeklyId?:string,
//     checked:boolean
// }

// interface todosinterface {
//     id: string;
//     label: string;
//     checked: boolean;
//     inTodos: boolean;
//     weeklyId: string;
// }

interface weeklyTodosProps{
    monthlyId?:string,
    id:string
}



export const WeeklyTodos = ({id}:weeklyTodosProps)=> {
    const setTodos = useTodoStore((state)=>state.setTodos)
    const addTodosStore = useTodoStore((state)=>state.addTodo)
    const addinTodoStore = useInTodoStore((state)=>state.addTodo)
    const checkTodoStore = useTodoStore((state)=>state.checkTodos)
    const deleteTodoStore = useTodoStore((state)=>state.deleteTodos)
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
    },[id,setTodos])

    console.log({storeTodos:Todos})

    return <div className="relative border h-54 w-90 overflow-auto px-1 mx-4">
        <div className="flex space-x-0.5 pt-0.5">
            <Input type="text" className="border" placeholder="write todos" onChange={(e)=>setTodo(e.target.value)} />
            <Button className="sticky top-0 right-0 bg-blue-400" onClick={async()=> { const t = await addTodos(todo,id);addTodosStore({label:todo,weeklyId:id,id:t.id,checked:t.checked});}}>add</Button>
        </div>
        <div>
            {Todos.filter(item => item.weeklyId == id).map((t)=><TodoComponent key={t.id} label={t.label} onClick={async()=>{
                const to = await addToTodosField(t.id)
                deleteTodoStore(to)
                addinTodoStore(to)
            }} onCheck={async()=>{
                await checkTodo(t.id)
                checkTodoStore(t.id)
            }} onClickDelete={async()=>{
                const to = await deleteTodo(t.id)
                deleteTodoStore(to.weekly)

            }}
             checked={t.checked} ></TodoComponent>)}
        </div>
        
    </div>
}