import { Todos } from "../components/Todos"
import { Vision } from "../components/Vision"
import { Weeklyfield } from "../components/Weeklyfield"


export default async function todos(){
 
    return <div className="flex flex-col items-center h-screen w-full overflow-auto ">
        <Todos/>
        <Vision/>
        <Weeklyfield/>
    </div>
}