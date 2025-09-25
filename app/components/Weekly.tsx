"use client"
import { useEffect, useState } from "react"
import { addWeekly, getWeekly } from "../actions/user"
import { Subweekly } from "./Subtweekly"
import { useweeklyOutFieldStore } from "@/store/monthlyStore"

interface weeklysProps{
    label:string,
    monthlyId:string,
    id:string
}

interface weeklyProps{
    id:string
}

type Weeklyslist = weeklysProps[]

export const Weekly = ({id}:weeklyProps)=>{


    const weeklys = useweeklyOutFieldStore((state)=>state.weeklyOutFields)
    const setWeeklys = useweeklyOutFieldStore((state)=>state.setWeekly)
    const addToWeekly = useweeklyOutFieldStore((state)=>state.addWeekly)

    const [weekly,setWeekly] = useState("")


    useEffect(()=>{
        let isMounted = true;

        async function fetchWeekly(id:string) {
            
            const weeklys = await getWeekly(id)
            if (isMounted){
                setWeeklys(weeklys)
            }
            
        }
        fetchWeekly(id)
        return ()=>{
            isMounted = false
        }
    },[])

    console.log({weeklys})

    return <div className="flex flex-col">
        <div>
            <input type="text" className="border" onChange={(e)=>setWeekly(e.target.value)}/>
            <button onClick={async()=>{const w= await addWeekly(weekly,id);  addToWeekly({label:w.label,monthlyId:w.monthlyId,id:w.id})}} className="bg-green-400 hover:bg-green-500 text-white">add</button>
        </div>
        <div className="border border-black h-64 w-64" key='weekly'>
            {weeklys.filter(item => item.monthlyId === id).map(weekly=><Subweekly label={weekly.label} key={weekly.id} id={weekly.id}></Subweekly>)}
        </div>
    </div>
}