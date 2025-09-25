"use client"
import { useEffect, useState } from "react"
import { Visioninput } from "./VisionInput"
import { Goals } from "./Goals"
import { addGoal, getGoals } from "../actions/user"

interface goalsprops{
    label:string,
    key:string
}


type Goalslist = goalsprops[]



export const Vision = ()=>{
    const [goals,setGoals] = useState<Goalslist>([])
    const [goal,setGoal] = useState('')

    useEffect(()=>{
        async function fetchGoals() {
            const goals = await getGoals()
            setGoals(goals.map(goal=>({label:goal.label,key:goal.id})))
        }
        fetchGoals()
    },[])

    console.log({goals})
    return <div>
    <div className="flex flex-col items-center p-5">
        <div>Vision</div>
        <Visioninput></Visioninput>
        <div>
            <input type="text" className="border border-black" onChange={(e)=>setGoal(e.target.value)} />
        <button onClick={async()=>{const g = await addGoal(goal); setGoals([...goals,{label:g.label,key:g.id}])}} className="bg-blue-400 hover:bg-blue-500 text-white rounded-lg cursor-pointer">add goal</button>
        </div>
        
        <div>
            
            <div>
                {goals.map((goal)=><Goals key={goal.key} label={goal.label} id={goal.key}/>)}
            </div>
        </div>
        
    </div>

    </div> 
}