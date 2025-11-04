"use client"
import { useWeeklyStore } from "@/store/weeklyStore"
import { WeeklyFieldComp } from "./WeeklyFieldComp"
import { useEffect } from "react"
import { getWeeklyField } from "../actions/user"
import { WeeklyTodos } from "./weeklyTodos"



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
    return <div className="p-10 flex flex-col items-center">
        <h1 className="text-2xl font-bold">Weekly</h1>
        <div className="border p-4 ">
            {weeklys.map((weekly) => (
                <div key={weekly.id} >
                    <WeeklyFieldComp  label={weekly.label} id={weekly.id}></WeeklyFieldComp>
                    <div id={weekly.id} className="">
                    <WeeklyTodos monthlyId={weekly.monthlyId} id={weekly.id}></WeeklyTodos>
                    </div>
                    
                </div>
                ))}
        </div>
    </div>
}