import { create } from "zustand"

interface WeeklyItem{
    label:string,
    id:string,
    monthlyId:string
}

type Weeklylist = WeeklyItem[]

interface WeeklyState {
    weeklys: WeeklyItem[],
    addWeekly:(label:string,id:string,monthlyId:string)=>void
    setWeekly:(weeklys:Weeklylist)=>void
    deleteWeekly:(id:string)=>void
}

export const useWeeklyStore = create<WeeklyState>((set)=>({
    weeklys:[],
    addWeekly:(label,id,monthlyId)=>
        set((state)=>({
            weeklys:[...state.weeklys,{label:label,id,monthlyId}]
        })),
    setWeekly:(weeklyslist)=>
        set((state)=>({
            weeklys: [...state.weeklys, ...weeklyslist.map(weekly=>({label:weekly.label,id:weekly.id,monthlyId:weekly.monthlyId}))]
        })),
    deleteWeekly:(id:string)=>{
        set((state)=>({
            weeklys:state.weeklys.filter(item=>item.id !== id)
        }))
    }
}))