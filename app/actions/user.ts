"use server"

import prisma from "@/db";
import { getServerSession } from "next-auth";

export async function addVision(vision:string) {
    const session = await getServerSession()
    if(!session?.user?.email){
        throw new Error("User not authenticated")
    }
    const user = await prisma.user.update({
        where:{email:session?.user?.email},
        data:{vision: vision }
    })

    if (user){
        return true
    }
    else{
        return false
    }
}

export async function getVision(){
    const session = await getServerSession()
    if(!session?.user?.email){
        throw new Error("User not authenticated")
    }
    const user = await prisma.user.findUnique({
        where:{email:session.user.email}
    })

    console.log(user?.vision)
    return user?.vision 
}

export async function addGoal(label:string){
    const session = await getServerSession()
    if(!session?.user?.email){
        throw new Error("User not permitted")
    }
    const user = await prisma.goals.create({
        data:{
            useremail:session.user.email,
            label:label
        }
    })

    return {label:user.label,id:user.id}
}

export async function getGoals() {
    const session = await getServerSession()
    if(!session?.user?.email){
        throw new Error("User not permitted")
    }
    const goals = await prisma.goals.findMany({
        where:{
            useremail:session.user.email
        },
         select:{
            label:true,
            id:true
         }
    })

    return goals
}

export async function addMonthly(label:string,id:string){
    const session = await getServerSession()
    if(!session?.user?.email){
        throw new Error("User not permitted")
    }
    const monthly = await prisma.monthly.create({
        data:{
            userId:id,
            label:label,
            useremail:session.user.email
        }
    })

    return {label:monthly.label,id:monthly.id,goalId:monthly.userId}
}


export async function getMonthly(userId:string) {
    const session = await getServerSession()
    if(!session?.user?.email){
        throw new Error("User not permitted")
    }
    const monthly = await prisma.monthly.findMany({
        where:{
            userId:userId,
            useremail:session.user.email
        },
         select:{
            label:true,
            id:true,
            userId:true
         }
    })

    return monthly
}

export async function addWeekly(label:string,monthlyId:string){
    const session = await getServerSession()
    if(!session?.user?.email){
        throw new Error("User not permitted")
    }
    const weekly = await prisma.weekly.create({
        data:{
            monthlyId:monthlyId,
            label:label,
            useremail:session.user.email
        }
    })

    return {label:weekly.label,id:weekly.id,monthlyId:weekly.monthlyId}
}

export async function getWeekly(monthlyId:string) {
    const session = await getServerSession()
    if(!session?.user?.email){
        throw new Error("User not permitted")
    }
    const weekly = await prisma.weekly.findMany({
        where:{
            monthlyId:monthlyId,
            inField:false,
            useremail:session.user.email
        },
         select:{
            label:true,
            id:true,
            monthlyId:true,
            inField:false
         }
    })

    return weekly
}

export async function getWeeklyField() {
    const session = await getServerSession()
    if(!session?.user?.email){
        throw new Error("User not permitted")
    }
    const weekly = await prisma.weekly.findMany({
        where:{
            inField:true,
            useremail:session.user.email
        },
         select:{
            label:true,
            id:true,
            monthlyId:true,
            inField:true
         }
    })

    return weekly
}


export async function addToWeeklyField(id:string) {
    const session = await getServerSession()
    if(!session?.user?.email){
        throw new Error("User not permitted")
    }

    const current = await prisma.weekly.findUnique({
        where:{
            id:id,
            useremail:session.user.email
        },
        select:{inField:true}
    })

    const weekly = await prisma.weekly.update({
        where:{id:id},
        data:{
        inField:!current?.inField
        }
    })

    return weekly
}

export async function deleteWeekly(id:string) {
    const session = await getServerSession()
    if(!session?.user?.email){
        throw new Error("User not permitted")
    }

    const weekly = await prisma.weekly.delete({
        where:{
            id,
            useremail:session.user.email
        }
    })

    return {
        msg:"successfully deleted",

    }

}



export async function addTodos(label:string,WeeklyId:string){
    const session = await getServerSession()
    if(!session?.user?.email){
        throw new Error("User not permitted")
    }
    const todos = await prisma.todos.create({
        data:{
            weeklyId:WeeklyId,
            label:label,
            useremail:session.user.email
        }
    })

    return {label:todos.label,id:todos.id,WeeklyId:todos.weeklyId,checked:todos.checked,inTodos:todos.inTodos}
}

export async function getTodosField(weeklyId:string) {
    const session = await getServerSession()
    if(!session?.user?.email){
        throw new Error("User not permitted")
    }
    const todos = await prisma.todos.findMany({
        where:{
            weeklyId,
            inTodos:false,
            useremail:session.user.email
        },
         select:{
            label:true,
            id:true,
            weeklyId:true,
            inTodos:true,
            checked:true
         }
    })

    return todos
}

export async function getTodosinField() {
    const session = await getServerSession()
    if(!session?.user?.email){
        throw new Error("User not permitted")
    }
    const todos = await prisma.todos.findMany({
        where:{
            inTodos:true,
            useremail:session.user.email
        },
         select:{
            label:true,
            id:true,
            weeklyId:true,
            inTodos:true,
            checked:true
         }
    })

    return todos
}

export async function addToTodosField(id:string) {
    const session = await getServerSession()
    if(!session?.user?.email){
        throw new Error("User not permitted")
    }

    const current = await prisma.todos.findUnique({
        where:{
            id:id,
            useremail:session.user.email
        },
        select:{inTodos:true}
    })

    const todo = await prisma.todos.update({
        where:{
            id:id,
            useremail:session.user.email
        },
        data:{
        inTodos:!current?.inTodos
        }
    })

    return todo
}

export async function checkTodo(id:string) {
    const session = await getServerSession()
    if(!session?.user?.email){
        throw new Error("User not permitted")
    }

    const current = await prisma.todos.findUnique({
        where:{
            id:id,
            useremail:session.user.email
        },
        select:{checked:true}
    })

    const todo = await prisma.todos.update({
        where:{
            id:id,
            useremail:session.user.email
        },
        data:{
        checked:!current?.checked
        }
    })

    return todo
}