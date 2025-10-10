import { useGoalOutFieldStore } from "@/store/goalStore"
import { Weekly } from "./Weekly"
import { deleteMonthly } from "../actions/user"

interface MonthlyProps{
    label:string,
    MonthlyId:string,
}

export const Monthly = ({label,MonthlyId}:MonthlyProps)=>{

    const deleteMonthlyStore = useGoalOutFieldStore((state)=>state.deleteGoal)
    return <div>
        <div className="flex space-x-2">
            <div>
            {label}
            </div>
            <div>
                <button className="bg-red-400 hover:bg-red-500 text-white cursor-pointer" onClick={async()=>{  const m =await deleteMonthly(MonthlyId); deleteMonthlyStore(MonthlyId)}}>delete</button>
            </div>
        </div>
        
        <Weekly id={MonthlyId}/>
        
    </div>
}