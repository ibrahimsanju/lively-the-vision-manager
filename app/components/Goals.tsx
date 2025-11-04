import { useEffect, useState } from "react"
import { addMonthly, deleteGoal, getMonthly } from "../actions/user"
import { Monthly } from "./Monthly"
import { useGoalOutFieldStore } from "@/store/goalStore"
import { useVisionOutFieldStore } from "@/store/visionStore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
    },[id,setGoals])

    console.log({MONTHLYGOALLLSSS:goals})


    function togglediv(){
        const mydiv = document.getElementById(id)
        mydiv?.classList.toggle("hidden")
    }

    return <div>
        <div className="flex justify-between">
            <div className="flex space-x-1">
                <Button className="bg-blue-400 text-white hover:bg-blue-500 cursor-pointer p-1" onClick={()=>{togglediv()}}>O</Button>
                <div className="font-semibold">{label}</div>
            </div>
            <Button className="bg-red-400 text-white hover:bg-red-500 cursor-pointer" onClick={async ()=>{await deleteGoal(id);deleteMainGoal(id)}}>delete</Button>
        </div>
        
        
        <div className= "hidden" id={id}  >
            <div className="px-3 ">
                <Input type="text" value={goal} placeholder="write your monthly goals" className="border border-black w-60 p-2" onChange={(e)=>setGoal(e.target.value)}/>
                <Button className="bg-blue-400 hover:bg-blue-500 text-white rounded-lg cursor-pointer" onClick={async()=>{const g = await addMonthly(goal,id); addGoal({label:g.label,id:g.id,userId:g.goalId});setGoal("")}}>add me</Button>
            </div>
            
            <div className="  my-3 " id="myDiv" >
                {goals.filter(item=>item.userId === id).map((goal)=><Monthly key={goal.id} MonthlyId={goal.id} label={goal.label}></Monthly>)}
            </div>
        </div>
        
    </div>
}