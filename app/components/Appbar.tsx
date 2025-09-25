"use client"

import {signIn, signOut, useSession } from "next-auth/react";

export const Appbar = ()=>{
    const session = useSession()
      return <div>
        {!session.data?.user && <button className="bg-blue-400 hover:bg-blue-500 text-white" onClick={()=>signIn()}>Sign In</button>}
        {session.data?.user && <button className="bg-blue-400 hover:bg-blue-500 text-white" onClick={()=>signOut()}>Sign Out</button>}
      </div>
}