import { create } from "zustand"

interface weeklyOutFieldItem{
    label:string,
    monthlyId:string
    id:string
}

type weeklylist = weeklyOutFieldItem[]

interface weeklyOutFieldState {
    weeklyOutFields: weeklyOutFieldItem[],
    setWeekly:(weeklys:weeklylist)=>void
    addWeekly:(weekly:weeklyOutFieldItem)=>void
    deleteWeekly:(id:string)=>void
}

export const useweeklyOutFieldStore = create<weeklyOutFieldState>((set)=>({
    weeklyOutFields:[],
    setWeekly:(weeklys:weeklyOutFieldItem[])=>
        set((state)=>({
            weeklyOutFields: [...state.weeklyOutFields, ...weeklys.map(weekly=>({label:weekly.label,id:weekly.id,monthlyId:weekly.monthlyId}))]
        })),
    addWeekly: (weekly) =>
  set((state) => {
    const exists = state.weeklyOutFields.some(
      (item) => item.id === weekly.id
    );
    if (exists) {
      return state; // Do nothing if duplicate
    }
    return {
      weeklyOutFields: [
        {
          label: weekly.label,
          id: weekly.id,
          monthlyId: weekly.monthlyId,
        },
        ...state.weeklyOutFields,
        
      ],
    };
  }),
    deleteWeekly:(id)=>{
        set((state)=>({
            weeklyOutFields:state.weeklyOutFields.filter(items => items.id !== id)
        }))
    }
}))