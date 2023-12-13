import { NextResponse } from 'next/server'
import { readFileSync } from 'fs';

export async function GET() {
    try{
        const comercio = JSON.parse(readFileSync("data/comercio.txt"))
        console.log(comercio)
        return NextResponse.json({comercio})
    } catch(e){  
        return NextResponse.json({message: "Comercio no existen...", status: 400})
    }
}