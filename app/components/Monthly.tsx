import { Weekly } from "./Weekly"

interface MonthlyProps{
    label:string,
    MonthlyId:string
}

export const Monthly = ({label,MonthlyId}:MonthlyProps)=>{
    return <div>
        <div className="flex space-x-2">
            <div>
            {label}
            </div>
            <div>
                <button className="bg-red-400 hover:bg-red-500 text-white cursor-pointer">delete</button>
            </div>
        </div>
        
        <Weekly id={MonthlyId}/>
        
    </div>
}