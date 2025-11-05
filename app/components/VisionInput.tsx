"use client"
import { useEffect, useState } from "react"
import { addVision, getVision } from "../actions/user"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {Label} from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export const Visioninput = ()=>{
    const [placeholder,setPlaceholder] = useState("")
    const [vision,setVision] = useState("")

    useEffect(()=>{
        async function fetchvision(){
            const vis  = await getVision() || ""
            setVision(vis)
            setPlaceholder(vis)
        }

        fetchvision()
    },[])

    if (placeholder.trim() ==''){
        setPlaceholder("Click To create vision")
    }


    return <div className="flex flex-col pt-10 items-center">
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <div className="text-2xl font-bold text-center w-80 break-words whitespace-normal">{placeholder||"Click To write your Vision"}</div>    
                </DialogTrigger>
            </form>
            <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Vision</DialogTitle>
            <DialogDescription>
              Make changes to your Vision here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3 ">
              <Label htmlFor="name-1">Vision</Label>
              <Input id="name-1" placeholder={placeholder||"write your vision"} onChange={(e)=>setVision(e.target.value)} />
            </div>
            
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" onClick={()=>{setPlaceholder(vision);addVision(vision);}}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
            
            
        </Dialog>
        
    </div>
}



