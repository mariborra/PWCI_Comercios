import { NextResponse } from 'next/server'
import { readFileSync } from 'fs';

export async function POST(request) {
    const data = await request.json();
    try {
        console.log(data);
        const users = JSON.parse(readFileSync("data/users.txt"));
        console.log(users);
        const user = users.find(user => user.email === data.email && user.password === data.password);
        if (user) {
            // Devuelve el ID del usuario junto con el mensaje y el status
            return NextResponse.json({ message: "Usuario existe...", status: 200, user: { id: user.id } });
        } else {
            return NextResponse.json({ message: "Usuario no existe...", status: 400 });
        }
    } catch (e) {
        console.error(e);
        return NextResponse.json({ message: "Error en el servidor", status: 500 });
    }
}
