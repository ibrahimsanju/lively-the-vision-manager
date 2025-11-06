import { useGoalOutFieldStore } from "@/store/goalStore"
import { Weekly } from "./Weekly"
import { deleteMonthly } from "../actions/user"
import { Button } from "@/components/ui/button"
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
    return <div className="border  rounded-2xl m-2">
        <div className="flex space-x-2 pl-1.5">
            <Button className="bg-green-400 hover:bg-green-500 text-white p-1" onClick={()=>togglediv()}>O</Button>
            <div className="">
            {label}
            </div>
            <div>
                <Button className="bg-red-400 hover:bg-red-500 text-white cursor-pointer" onClick={async()=>{  await deleteMonthly(MonthlyId); deleteMonthlyStore(MonthlyId)}}>delete</Button>
            </div>
        </div>
        <div className="" id={MonthlyId}>
            <Weekly id={MonthlyId}/>
        </div>
        
        
    </div>
}