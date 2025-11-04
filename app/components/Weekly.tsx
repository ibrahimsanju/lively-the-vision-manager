"use client"
import { useEffect, useState } from "react"
import { addWeekly, getWeekly } from "../actions/user"
import { Subweekly } from "./Subtweekly"
import { useweeklyOutFieldStore } from "@/store/monthlyStore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


interface weeklyProps{
    id:string
}


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
    },[id,setWeeklys])

    console.log({weeklys})



    return <div className="flex flex-col pl-8 " id={id}>
        <div className="flex space-x-0.5">
            
            <Input type="text" className="w-60" placeholder="write weekly goals" onChange={(e)=>setWeekly(e.target.value)}/>
            <Button onClick={async()=>{const w= await addWeekly(weekly,id);  addToWeekly({label:w.label,monthlyId:w.monthlyId,id:w.id})}} className="bg-green-400 hover:bg-green-500 text-white">add</Button>
        </div>
        <div className="" key='weekly'>
            {weeklys.filter(item => item.monthlyId === id).map(weekly=><Subweekly label={weekly.label} key={weekly.id} id={weekly.id}></Subweekly>)}
        </div>
    </div>
}