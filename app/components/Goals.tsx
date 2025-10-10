import { useEffect, useState } from "react"
import { addMonthly, deleteGoal, getMonthly } from "../actions/user"
import { Monthly } from "./Monthly"
import { useGoalOutFieldStore } from "@/store/goalStore"
import { useVisionOutFieldStore } from "@/store/visionStore"

interface goalsprops{
    label:string,
    id:string,
}


export const Goals = ({label,id}:goalsprops)=>{
    const goals = useGoalOutFieldStore((state)=>state.GoalOutFields)
    const setGoals = useGoalOutFieldStore((state)=>state.setGoal)
    const addGoal = useGoalOutFieldStore((state)=>state.addGoal)
    const deleteMainGoal = useVisionOutFieldStore((state)=>state.deleteVision)
    const [goal,setGoal] = useState("")

    useEffect(()=>{
        let isMounted = true
        async function fetchMonthly(id:string) {

            const monthly = await getMonthly(id)
            if(isMounted){
                setGoals(monthly)
            }
           
        }
        fetchMonthly(id)
        return ()=>{
        isMounted = false
        }
    },[id])

    console.log({MONTHLYGOALLLSSS:goals})

    return <div className="flex flex-col">
        <div className="flex space-x-1">
            <div>{label}</div>
            <button className="bg-red-400 text-white hover:bg-red-500 cursor-pointer" onClick={async ()=>{const g = await deleteGoal(id);deleteMainGoal(id)}}>delete</button>
        </div>
        
        <div>
            <input type="text" placeholder="write your monthly goals" className="border border-black" onChange={(e)=>setGoal(e.target.value)}/>
            <button className="bg-blue-400 hover:bg-blue-500 text-white rounded-lg cursor-pointer" onClick={async()=>{const g = await addMonthly(goal,id); addGoal({label:g.label,id:g.id,userId:g.goalId})}}>add me</button>
            <div className="border-black border my-3">
                {goals.filter(item=>item.userId === id).map((goal)=><Monthly key={goal.id} MonthlyId={goal.id} label={goal.label}></Monthly>)}
            </div>
        </div>
        
    </div>
}