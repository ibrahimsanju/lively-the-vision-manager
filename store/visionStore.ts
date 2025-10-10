import { create } from "zustand"

interface VisionOutFieldItem{
    label:string,
    id:string
}

type Visionlist = VisionOutFieldItem[]

interface VisionOutFieldState {
    VisionOutFields: VisionOutFieldItem[],
    setVision:(Visions:Visionlist)=>void
    addVision:(Vision:VisionOutFieldItem)=>void
    deleteVision:(id:string)=>void
}

export const useVisionOutFieldStore = create<VisionOutFieldState>((set)=>({
    VisionOutFields:[],
    setVision:(Visions:VisionOutFieldItem[])=>
        set((state)=>({
            VisionOutFields: [...state.VisionOutFields, ...Visions.map(Vision=>({label:Vision.label,id:Vision.id}))]
        })),
    addVision: (Vision) =>
  set((state) => {
    const exists = state.VisionOutFields.some(
      (item) => item.id === Vision.id
    );
    if (exists) {
      return state; // Do nothing if duplicate
    }
    return {
      VisionOutFields: [
        ...state.VisionOutFields,
        {
          label: Vision.label,
          id: Vision.id,
        },
      ],
    };
  }),
    deleteVision:(id)=>{
        set((state)=>({
            VisionOutFields:state.VisionOutFields.filter(items => items.id !== id)
        }))
    }
}))