"use client"
import { useEffect, useState } from "react"
import { Visioninput } from "./VisionInput"
import { Goals } from "./Goals"
import { addGoal, getGoals } from "../actions/user"
import { useVisionOutFieldStore } from "@/store/visionStore"

interface goalsprops{
    label:string,
    id:string
}


type Goalslist = goalsprops[]



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
    },[])

    console.log({goals})
    return <div>
    <div className="flex flex-col items-center p-5">
        <div className="text-2xl font-bold">Vision</div>
        <Visioninput></Visioninput>
        <div>
        <input type="text" placeholder="write your main goals" className="border border-black" onChange={(e)=>setGoal(e.target.value)} />
        <button onClick={async()=>{const g = await addGoal(goal); addGoals({label:g.label,id:g.id})}} className="bg-blue-400 hover:bg-blue-500 text-white rounded-lg cursor-pointer">add goal</button>
        </div>
        
        <div>
            
            <div>
                {goals.map((goal)=><Goals id={goal.id} label={goal.label} key={goal.id}/>)}
            </div>
        </div>
        
    </div>

    </div> 
}