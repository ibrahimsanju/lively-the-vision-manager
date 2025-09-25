import { ChangeEventHandler, MouseEventHandler } from "react"

interface TodoComponentProps{
    label:string;
    onClick?:MouseEventHandler<HTMLButtonElement>;
    onCheck?:ChangeEventHandler<HTMLInputElement>;
    checked?:boolean
}

export const TodoComponent = ({label,onClick,onCheck,checked}:TodoComponentProps)=>{
    return <div className="flex flex-row space-x-0.5">
        <input onChange={onCheck} checked={checked} type="checkbox" />
        <div>{label}</div>
        <button onClick={onClick} className="bg-blue-400 hover:bg-blue-500 text-white">add</button>
    </div>
} 