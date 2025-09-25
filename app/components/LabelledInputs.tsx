import type { ChangeEventHandler } from "react"

interface LabelledInputsProps{
    label:string,
    placeholder:string,
    onChange:ChangeEventHandler<HTMLInputElement>
}

export const LabelledInputs = ({label,placeholder,onChange}:LabelledInputsProps)=>{
    return <div className="p-2">
        <p className="font-bold">{label}</p>
        <input className="border-1 p-1 rounded-md" type="text" placeholder={placeholder} onChange={onChange}/>
    </div>
}