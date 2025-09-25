"use client"
import { useEffect, useState } from "react"
import { addVision, getVision } from "../actions/user"



export const Visioninput = ()=>{
    const [placeholder,setPlaceholder] = useState("")
    const [vision,setVision] = useState("")

    useEffect(()=>{
        async function fetchvision(){
            const vis  = await getVision() || ""
            setVision(vis)
            setPlaceholder(vis)
        }

        fetchvision()
    },[])



    return <div className="flex flex-col">
        <textarea name="" id="" className="" placeholder={placeholder||"write your vision"} onChange={(e)=>setVision(e.target.value)} ></textarea>
        <button className="bg-blue-400 hover:bg-blue-500 text-white rounded-lg cursor-pointer"onClick={()=>{setPlaceholder(vision);addVision(vision);}}>setvision</button>
    </div>
}



