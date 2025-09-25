"use client"
import { useRouter } from "next/navigation"
import { LabelledInputs } from "./LabelledInputs"
import { useState } from "react"
import axios from "axios"
export const Signin = ()=>{
     const [username,setUsername] = useState("")
     const [password,setPassword] = useState("")
     const router = useRouter()

    return <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col border items-center py-8 px-4 rounded-2xl">
            <div className="font-bold text-2xl">Sign In</div>
            <LabelledInputs label="username" placeholder="example@gmail.com" onChange={(e=>{
                setUsername(e.target.value)
            })}/>
            <LabelledInputs label="password" placeholder="1234567" onChange={(e=>{
                setPassword(e.target.value)
            })}/>
            <button className="bg-blue-400 hover:bg-blue-500 cursor-pointer text-white rounded p-1" onClick={()=>{
                router.push("/")
            }}>Sign In</button>
        </div>
    </div>
}