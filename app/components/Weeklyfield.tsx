"use client"
import { useWeeklyStore } from "@/store/weeklyStore"
import { WeeklyFieldComp } from "./WeeklyFieldComp"
import { useEffect } from "react"
import { getWeeklyField } from "../actions/user"
import { WeeklyTodos } from "./weeklyTodos"
interface WeeklyFieldCompProps{
    label:string,
    id?:string
}


export const Weeklyfield = ()=>{
    const weeklys = useWeeklyStore((state)=>state.weeklys)
    const setWeeklys = useWeeklyStore((state)=>state.setWeekly)

    useEffect(() => {
    let isMounted = true;

    async function fetchWeekly() {
        const weekly = await getWeeklyField();
        if (isMounted) setWeeklys(weekly);
    }

    fetchWeekly();

    return () => { isMounted = false };
}, [])



    console.log({something:weeklys})
    return <div>
        <h1>Weekly</h1>
        <div className="border h-64 overflow-y-scroll">
            {weeklys.map((weekly) => (
                <div key={weekly.id}>
                    <WeeklyFieldComp  label={weekly.label} id={weekly.id}></WeeklyFieldComp>
                    <WeeklyTodos monthlyId={weekly.monthlyId} id={weekly.id}></WeeklyTodos>
                </div>
                
                ))}
        </div>
    </div>
}