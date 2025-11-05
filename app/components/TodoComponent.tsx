import { ChangeEventHandler, MouseEventHandler } from "react"
import { Button } from "@/components/ui/button";

interface TodoComponentProps{
    label:string;
    onClick?:MouseEventHandler<HTMLButtonElement>;
    onClickDelete?:MouseEventHandler<HTMLButtonElement>;
    onCheck?:ChangeEventHandler<HTMLInputElement>;
    checked?:boolean
    hidden?:string
}

export const TodoComponent = ({label,onClick,onCheck,checked,onClickDelete}:TodoComponentProps)=>{
    return <div className="flex flex-row items-center justify-between ">
        <div className="flex space-x-1">
            <input onChange={onCheck} checked={checked} type="checkbox" className="w-5"/>
            <div className="">{label}</div>
        </div>
        <div className="flex space-x-0.5">
            <Button onClick={onClick} className="bg-blue-400 hover:bg-blue-500 text-white p-2">add</Button>
            <Button onClick={onClickDelete} className="bg-red-400 hover:bg-red-500 text-white p-2">delete</Button>
        </div>
        
        
    </div>
} 