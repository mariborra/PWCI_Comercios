import { promises as fs } from 'fs';
import path from 'path';

export async function DELETE(request) {
    const data = await request.json();
    
    try {
        // Definir la ruta al archivo de texto
        const filePath = path.join(process.cwd(), 'data', 'comercio.txt');

        // Leer el archivo de texto actual
        const fileData = await fs.readFile(filePath, 'utf8');
        let comercios = JSON.parse(fileData);

        // Verificar si el comercio existe
        const comercioIndex = comercios.findIndex(comercio => comercio.id === data.id);
        if (comercioIndex === -1) {
            return new Response(JSON.stringify({ message: "Comercio no existe...", status: 404 }), {
                status: 404,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        // Eliminar el comercio del array
        comercios = comercios.filter((_, index) => index !== comercioIndex);

        // Escribir la lista actualizada en el archivo de texto
        await fs.writeFile(filePath, JSON.stringify(comercios, null, 2), 'utf8');

        return new Response(JSON.stringify({ message: "Comercio eliminado con éxito", status: 200 }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Error al eliminar comercio", status: 500 }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
