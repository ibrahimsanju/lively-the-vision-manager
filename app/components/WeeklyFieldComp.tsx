import { useEffect, useState } from "react"
import { addToWeeklyField, deleteWeekly, getWeeklyField } from "../actions/user"
import { useWeeklyStore } from "@/store/weeklyStore"
import { useweeklyOutFieldStore } from "@/store/monthlyStore"
interface WeeklyFieldCompProps{
    label:string,
    id:string
}

type WeeklysList = WeeklyFieldCompProps[]


export const WeeklyFieldComp = ({label,id}:WeeklyFieldCompProps)=>{
    const [weeklys,setWeeklys] = useState<WeeklysList>([])
     const deleWeeklyinField = useWeeklyStore((state)=>state.deleteWeekly)
     const addWeeklyoutField = useweeklyOutFieldStore((state)=>state.addWeekly)

    // useEffect(()=>{
    //     async function fetchWeekly() {
    //         const w = await getWeeklyField()
    //         setWeeklys(weeklys.map(weekly=>({label:weekly.label,id:weekly.id})))
    //     }
    // })

    return <div className="flex">
        <h4>
            {label}
        </h4>
        <div>
            <button className="bg-green-400 hover:bg-green-500 text-white"onClick={async()=>{ const w = await addToWeeklyField(id); addWeeklyoutField(w);deleWeeklyinField(w.id);}}>add to monthly</button>
            <button className="bg-red-400 hover:bg-red-500 text-white" onClick={async()=>{await deleteWeekly(id); deleWeeklyinField(id);}}>delete</button>
        </div>
    </div>
}