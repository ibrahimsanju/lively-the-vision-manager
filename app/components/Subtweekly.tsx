import { useWeeklyStore } from "@/store/weeklyStore"
import { addToWeeklyField } from "../actions/user"
import { useweeklyOutFieldStore } from "@/store/monthlyStore"
import { WeeklyTodos } from "./weeklyTodos"

interface SubweeklyProps{
    label:string,
    id:string
}



export const Subweekly = ({label,id}:SubweeklyProps)=>{

    const addWeekly = useWeeklyStore((state)=>state.addWeekly)
    const deletefromWeekly = useweeklyOutFieldStore((state)=>state.deleteWeekly)

    return <div>
        <div className="flex">
            <div>
                {label}
            </div>
           
            <button className="bg-green-400 hover:bg-green-500 text-white" onClick={async()=>{const w = await addToWeeklyField(id); addWeekly(w.label,w.id,w.monthlyId); deletefromWeekly(w.id)}}> add </button>
        </div>
        <WeeklyTodos id={id}/>
    </div>
}