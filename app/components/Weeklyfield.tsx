"use client"
import { useWeeklyStore } from "@/store/weeklyStore"
import { WeeklyFieldComp } from "./WeeklyFieldComp"
import { useState,useEffect } from "react"
import { getWeeklyField } from "../actions/user"
import { useweeklyOutFieldStore } from "@/store/monthlyStore"
import { WeeklyTodos } from "./weeklyTodos"
interface WeeklyFieldCompProps{
    label:string,
    id?:string
}

type WeeklysList = WeeklyFieldCompProps[]

export const Weeklyfield = ()=>{
    const weeklys = useWeeklyStore((state)=>state.weeklys)
    const setWeeklys = useWeeklyStore((state)=>state.setWeekly)

    useEffect(()=>{
        async function fetchWeekly(){
            const weekly = await getWeeklyField()
            setWeeklys(weekly)
        }
        fetchWeekly()
    },[])



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