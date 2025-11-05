import { useWeeklyStore } from "@/store/weeklyStore"
import { addToWeeklyField } from "../actions/user"
import { useweeklyOutFieldStore } from "@/store/monthlyStore"
import { WeeklyTodos } from "./weeklyTodos"
import { Button } from "@/components/ui/button"
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
        
        <div className="flex justify-between ">
            <div className="flex items-center space-x-1">
                <Button className="bg-green-400 hover:bg-green-500 text-white p-1 rounded-2xl" onClick={()=>togglediv()}>O</Button>
                <div>
                    {label}
                </div>
            </div>
            <Button className="bg-green-400 hover:bg-green-500 text-white" onClick={async()=>{const w = await addToWeeklyField(id); addWeekly(w.label,w.id,w.monthlyId); deletefromWeekly(w.id)}}> add </Button>
        </div>
        <div className="" id={id}>
            <WeeklyTodos id={id}/>
        </div>
        
    </div>
}