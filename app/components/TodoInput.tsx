"use client"

import type { ChangeEventHandler,MouseEventHandler } from "react"
import { Button } from "@/components/ui/button"
interface TodoInputProps{
    onChange:ChangeEventHandler<HTMLInputElement>,
    onClick:MouseEventHandler<HTMLButtonElement>
}

export const TodoInput = ({onChange,onClick}:TodoInputProps)=>{
    return <div className="flex flex-col">
        <input type="text" className=" h-7" onChange={onChange} />
        <Button onClick={onClick} className="hover:bg-blue-500 bg-blue-400 p-2 cursor-pointer text-white rounded-lg">add</Button>
    </div>
}