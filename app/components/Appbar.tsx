"use client"

import {signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Appbar = ()=>{
    const session = useSession()
      return <div>
        {!session.data?.user && <Button className="bg-blue-400 hover:bg-blue-500 text-white" onClick={()=>signIn()}>Sign In</Button>}
        {session.data?.user && <Button className="bg-blue-400 hover:bg-blue-500 text-white" onClick={()=>signOut()}>Sign Out</Button>}
        {session.data?.user && <Link className="bg-red-400 hover:bg-red-500 text-white" href={"/todos"}>Todos</Link>}
      </div>
}