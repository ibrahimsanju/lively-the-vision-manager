import { create } from "zustand"

interface GoalOutFieldItem{
    label:string,
    userId:string
    id:string
}

type Goallist = GoalOutFieldItem[]

interface GoalOutFieldState {
    GoalOutFields: GoalOutFieldItem[],
    setGoal:(Goals:Goallist)=>void
    addGoal:(Goal:GoalOutFieldItem)=>void
    deleteGoal:(id:string)=>void
}

export const useGoalOutFieldStore = create<GoalOutFieldState>((set)=>({
    GoalOutFields:[],
    setGoal:(Goals:GoalOutFieldItem[])=>
        set((state)=>({
            GoalOutFields: [...state.GoalOutFields, ...Goals.map(Goal=>({label:Goal.label,id:Goal.id,userId:Goal.userId}))]
        })),
    addGoal: (Goal) =>
  set((state) => {
    const exists = state.GoalOutFields.some(
      (item) => item.id === Goal.id
    );
    if (exists) {
      return state; // Do nothing if duplicate
    }
    return {
      GoalOutFields: [
        ...state.GoalOutFields,
        {
          label: Goal.label,
          id: Goal.id,
          userId: Goal.userId,
        },
      ],
    };
  }),
    deleteGoal:(id)=>{
        set((state)=>({
            GoalOutFields:state.GoalOutFields.filter(items => items.id !== id)
        }))
    }
}))