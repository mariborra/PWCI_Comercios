import { NextResponse } from 'next/server'
import { readFileSync } from 'fs';

export async function POST(request) {
    const data = await request.json()
    try{
        console.log(data)
        const comercios = JSON.parse(readFileSync("data/comercio.txt"))
        console.log(comercios)
        const comercio = comercios.filter(comercio => comercio.id == data.id) 
        if (comercio.length > 0) {
            return NextResponse.json({message: "Comercio existe...", status: 200})
        } else {
            return NextResponse.json({message: "Comercio no existe...", status: 400})
        }
    } catch(e){  
        return NextResponse.json({message: "Comercio no existe...", status: 400})
    }
}