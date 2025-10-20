import { useGoalOutFieldStore } from "@/store/goalStore"
import { Weekly } from "./Weekly"
import { deleteMonthly } from "../actions/user"

interface MonthlyProps{
    label:string,
    MonthlyId:string,
}

export const Monthly = ({label,MonthlyId}:MonthlyProps)=>{

    function togglediv(){
        const mydiv = document.getElementById(MonthlyId)
        mydiv?.classList.toggle("hidden")
    }

    const deleteMonthlyStore = useGoalOutFieldStore((state)=>state.deleteGoal)
    return <div className="border p-2 rounded-2xl overflow-auto m-2">
        <div className="flex space-x-2 pl-1.5">
            <button className="bg-green-400 hover:bg-green-500 text-white" onClick={()=>togglediv()}>O</button>
            <div>
            {label}
            </div>
            <div>
                <button className="bg-red-400 hover:bg-red-500 text-white cursor-pointer" onClick={async()=>{  const m =await deleteMonthly(MonthlyId); deleteMonthlyStore(MonthlyId)}}>delete</button>
            </div>
        </div>
        <div className="" id={MonthlyId}>
            <Weekly id={MonthlyId}/>
        </div>
        
        
    </div>
}