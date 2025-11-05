import { addToWeeklyField, deleteWeekly } from "../actions/user"
import { useWeeklyStore } from "@/store/weeklyStore"
import { useweeklyOutFieldStore } from "@/store/monthlyStore"
import { Button } from "@/components/ui/button"
interface WeeklyFieldCompProps{
    label:string,
    id:string
}




export const WeeklyFieldComp = ({label,id}:WeeklyFieldCompProps)=>{
     const deleWeeklyinField = useWeeklyStore((state)=>state.deleteWeekly)
     const addWeeklyoutField = useweeklyOutFieldStore((state)=>state.addWeekly)

    // useEffect(()=>{
    //     async function fetchWeekly() {
    //         const w = await getWeeklyField()
    //         setWeeklys(weeklys.map(weekly=>({label:weekly.label,id:weekly.id})))
    //     }
    // })
    function togglediv(){
        const mydiv = document.getElementById(id)
        mydiv?.classList.toggle("hidden")
    }

    return <div className="flex justify-between space-x-1">
        <div className="flex space-x-1">
            <Button className="bg-green-400 hover:bg-green-500 text-white p-1" onClick={()=>togglediv()}>O</Button>
            <h4>
                {label}
            </h4>
        </div>
        
        <div className="flex">
            <Button className="bg-green-400 hover:bg-green-500 text-white"onClick={async()=>{ const w = await addToWeeklyField(id); addWeeklyoutField(w);deleWeeklyinField(w.id);}}>add </Button>
            <Button className="bg-red-400 hover:bg-red-500 text-white" onClick={async()=>{await deleteWeekly(id); deleWeeklyinField(id);}}>delete</Button>
        </div>
    </div>
}