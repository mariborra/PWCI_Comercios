import { NextResponse } from 'next/server'
import { readFileSync } from 'fs';

export async function GET() {
    try{
        const admin = JSON.parse(readFileSync("data/admin.txt"))
        console.log(admin)
        return NextResponse.json({admin})
    } catch(e){  
        return NextResponse.json({message: "Admin no existen...", status: 400})
    }
}