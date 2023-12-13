import { promises as fs } from 'fs';
import path from 'path';

export async function DELETE(request) {
    try {
        const data = await request.json();
        const filePath = path.join(process.cwd(), 'data', 'users.txt');
        const fileData = await fs.readFile(filePath, 'utf8');
        let usuarios = JSON.parse(fileData);

        const usuarioIndex = usuarios.findIndex(usuario => usuario.id === data.id);
        if (usuarioIndex === -1) {
            return new Response(JSON.stringify({ message: "Usuario no existe...", status: 404 }), { status: 404 });
        }

        usuarios.splice(usuarioIndex, 1);
        await fs.writeFile(filePath, JSON.stringify(usuarios, null, 2), 'utf8');
        return new Response(JSON.stringify({ message: "Usuario eliminado con éxito", status: 200 }), { status: 200 });
    } catch (error) {
        console.error("Error:", error.message);
        return new Response(JSON.stringify({ message: "Error al eliminar usuario", status: 500 }), { status: 500 });
    }
}
