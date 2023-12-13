import { NextResponse } from 'next/server'
import { readFileSync } from 'fs';

export async function POST(request) {
    const data = await request.json()
    try{
        console.log(data)
        const admins = JSON.parse(readFileSync("data/admin.txt"))
        console.log(admins)
        const admin = admins.filter(admin => admin.email == data.email && admin.password == data.password) 
        if (admin.length > 0) {
            return NextResponse.json({message: "Admin existe...", status: 200})
        } else {
            return NextResponse.json({message: "Admin no existe...", status: 400})
        }
    } catch(e){  
        return NextResponse.json({message: "Admin no existe...", status: 400})
    }
}