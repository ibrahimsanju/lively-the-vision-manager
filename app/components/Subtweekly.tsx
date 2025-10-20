import { useWeeklyStore } from "@/store/weeklyStore"
import { addToWeeklyField } from "../actions/user"
import { useweeklyOutFieldStore } from "@/store/monthlyStore"
import { WeeklyTodos } from "./weeklyTodos"

interface SubweeklyProps{
    label:string,
    id:string
}



export const Subweekly = ({label,id}:SubweeklyProps)=>{

    function togglediv(){
        const mydiv = document.getElementById(id)
        mydiv?.classList.toggle("hidden")
    }


    const addWeekly = useWeeklyStore((state)=>state.addWeekly)
    const deletefromWeekly = useweeklyOutFieldStore((state)=>state.deleteWeekly)

    return <div className=" p-3">
        
        <div className="flex">
            <button className="bg-green-400 hover:bg-green-500 text-white" onClick={()=>togglediv()}>O</button>
            <div>
                {label}
            </div>
           
            <button className="bg-green-400 hover:bg-green-500 text-white" onClick={async()=>{const w = await addToWeeklyField(id); addWeekly(w.label,w.id,w.monthlyId); deletefromWeekly(w.id)}}> add </button>
        </div>
        <div className="" id={id}>
            <WeeklyTodos id={id}/>
        </div>
        
    </div>
}