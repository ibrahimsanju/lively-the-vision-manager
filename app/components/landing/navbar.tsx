"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import {signIn, signOut, useSession } from "next-auth/react";
export function Navbar() {
    const session = useSession()
  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="font-bold text-xl text-foreground">Lively</span>
          </div>
          <div className="flex items-center gap-4">
            {!session.data?.user &&<Button variant="ghost" size="sm" onClick={()=>signIn()}>
              Sign In
            </Button>}
            {session.data?.user &&<Button variant="ghost" size="sm" onClick={()=>signOut()}>
              Sign Out
            </Button>}
            {session.data?.user && <Link  href={"/todos"}>
            <Button variant="ghost"> 
                Todos
            </Button>
            </Link>}
            
          </div>
        </div>
      </div>
    </nav>
  )
}
