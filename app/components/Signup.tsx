"use client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { LabelledInputs } from "./LabelledInputs"


export const Signup = ()=>{
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")
    const router = useRouter()

    return <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col border items-center py-8 px-4 rounded-2xl">
            <div className="font-bold text-2xl">Sign Up</div>
            <LabelledInputs label="username" placeholder="example@gmail.com" onChange={(e)=>{
                setUsername(e.target.value)
            }}/>
            <LabelledInputs label="name" placeholder="John doe" onChange={(e)=>{
                setName(e.target.value)
            }}/>
            <LabelledInputs label="password" placeholder="1234567" onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
            <button onClick={async ()=>{
                await axios.post("http://localhost:3000",{
                    username,
                    name,
                    password
                }).then(function(){
                    console.log("signed Up")
                    router.push('/')
                })
            }} className="bg-blue-400 hover:bg-blue-500 cursor-pointer text-white rounded p-1">Sign Up</button>
        </div>
    </div>
}