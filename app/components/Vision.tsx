"use client"
import { useEffect, useState } from "react"
import { Visioninput } from "./VisionInput"
import { Goals } from "./Goals"
import { addGoal, getGoals } from "../actions/user"
import { useVisionOutFieldStore } from "@/store/visionStore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


export const Vision = ()=>{
    const [goal,setGoal] = useState('')
    const goals = useVisionOutFieldStore((state)=>state.VisionOutFields)
    const setGoals = useVisionOutFieldStore((state)=>state.setVision)
    const addGoals = useVisionOutFieldStore((state)=>state.addVision)

    useEffect(()=>{
        async function fetchGoals() {
            const goals = await getGoals()
            setGoals(goals)
        }
        fetchGoals()
    },[setGoals])

    console.log({goals})
    return <div className="">
    <div className="">
        
        <Visioninput></Visioninput>
    </div>

    <div className="flex items-center justify-center p-6">
            <Input type="text" placeholder="write your main goals" className="border p-1 rounded" onChange={(e)=>setGoal(e.target.value)} />
            <Button onClick={async()=>{const g = await addGoal(goal); addGoals({label:g.label,id:g.id})}} className="bg-blue-400 hover:bg-blue-500 text-white rounded-lg cursor-pointer">add goal</Button>
    </div>
    
        <div>
            
            <div className=" ">
                {goals.map((goal)=><Goals id={goal.id} label={goal.label} key={goal.id}/>)}
            </div>
        </div>
        
    

    </div> 
}