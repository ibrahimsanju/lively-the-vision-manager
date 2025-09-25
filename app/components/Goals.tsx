import { useEffect, useState } from "react"
import { addMonthly, getMonthly } from "../actions/user"
import { Monthly } from "./Monthly"

interface goalsprops{
    label:string,
    id:string,
}

interface goalslistprops{
    label:string,
    goalId:string,
    id:string

}

type Goalslist = goalslistprops[]

export const Goals = ({label,id}:goalsprops)=>{
    const [goals,setGoals] = useState<Goalslist>([])
    const [goal,setGoal] = useState("")

    useEffect(()=>{
        async function fetchMonthly(id:string) {
            const monthly = await getMonthly(id)
            setGoals(monthly.map(month =>({label:month.label,id:month.id,goalId:month.userId})))
        }
        fetchMonthly(id)
    },[])

    console.log(goals)

    return <div className="flex flex-col">
        {label}
        
        <div>
            <input type="text" placeholder="write your monthly goals" className="border border-black" onChange={(e)=>setGoal(e.target.value)}/>
            <button className="bg-blue-400 hover:bg-blue-500 text-white rounded-lg cursor-pointer" onClick={async()=>{const g = await addMonthly(goal,id); setGoals([...goals,{label:g.label,id:g.id,goalId:g.goalId}])}}>add me</button>
            <div className="border-black border my-3">
                {goals.map((goal)=><Monthly key={goal.id} MonthlyId={goal.id} label={goal.label}></Monthly>)}
            </div>
        </div>
        
    </div>
}