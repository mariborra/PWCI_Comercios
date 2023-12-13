import { promises as fs } from 'fs';
import path from 'path';

export async function PUT(request) {
    try {
        const updatedUserData = await request.json();
        const filePath = path.join(process.cwd(), 'data', 'users.txt');

        const fileData = await fs.readFile(filePath, 'utf8');
        let users = JSON.parse(fileData);

        const userIndex = users.findIndex(user => user.id === updatedUserData.id);
        if (userIndex === -1) {
            return new Response(JSON.stringify({ message: "Usuario no encontrado...", status: 404 }), { status: 404 });
        }

        // Actualiza los datos del usuario
        users[userIndex] = { ...users[userIndex], ...updatedUserData };

        await fs.writeFile(filePath, JSON.stringify(users, null, 2), 'utf8');
        return new Response(JSON.stringify({ message: "Usuario actualizado con éxito", status: 200 }), { status: 200 });
    } catch (error) {
        console.error("Error:", error.message);
        return new Response(JSON.stringify({ message: "Error al actualizar usuario", status: 500 }), { status: 500 });
    }
}
