import { NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs';

export async function POST(request) {
    const data = await request.json()
    try{
        const comercio = JSON.parse(readFileSync("data/comercio.txt"))
        writeFileSync("data/comercio.txt", JSON.stringify([...comercio, data]))
    } catch(e){  
        writeFileSync("data/comercio.txt", JSON.stringify([data]))
    }
    return NextResponse.json({message: "Guardando datos..."})
}