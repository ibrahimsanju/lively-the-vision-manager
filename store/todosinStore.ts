import {create} from "zustand"

interface todosProps{
    label:string,
    weeklyId:string,
    id:string,
    checked:boolean
}

type TodosList = todosProps[]


interface TodoState{
    todos:TodosList,
    addTodo:(todo:todosProps) => void
    setTodos:(todo:TodosList) => void,
    checkTodo:(id:string)=>void,
    deleteTodo:(id:string)=>void,
}

export const useInTodoStore = create<TodoState>((set)=>({
    todos:[],
    addTodo:(todo)=>
        set((state)=>{
            const exists = state.todos.some(
                item=>(item.id == todo.id)
            );
            if(exists) return state
            return{
                todos:[...state.todos,todo]
            }
        }),
      setTodos: (todos) =>
            set((state) => {
            const newTodos = todos.filter(
                (todo) => !state.todos.some((item) => item.id === todo.id)
            );
            return {
                todos: [...state.todos, ...newTodos],
            };
            }),
    checkTodo:(id:string)=>{
        set((state)=>({
            todos:state.todos.map(todo=> todo.id === id ? {...todo,checked:!todo.checked}:todo)
        }))
    },
    deleteTodo:(id:string)=>{
        set((state)=>({
            todos:state.todos.filter(todo=>todo.id != id)
        }))
    }
        
}));