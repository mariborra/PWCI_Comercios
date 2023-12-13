import { promises as fs } from 'fs';
import path from 'path';

export async function PUT(request) {
    try {
        const updatedComercioData = await request.json();
        const filePath = path.join(process.cwd(), 'data', 'comercio.txt');

        const fileData = await fs.readFile(filePath, 'utf8');
        let comercios = JSON.parse(fileData);

        const comercioIndex = comercios.findIndex(comercio => comercio.id === updatedComercioData.id);
        if (comercioIndex === -1) {
            return new Response(JSON.stringify({ message: "Comercio no encontrado...", status: 404 }), { status: 404 });
        }

        // Actualiza solo los campos permitidos
        const camposPermitidos = ['nombreComercio', 'cif', 'direccion', 'email', 'telefono', 'ciudad', 'actividad', 'titulo', 'resumen', 'fotos', 'textos'];
        camposPermitidos.forEach(campo => {
            if (updatedComercioData[campo] !== undefined) {
                comercios[comercioIndex][campo] = updatedComercioData[campo];
            }
        });

        await fs.writeFile(filePath, JSON.stringify(comercios, null, 2), 'utf8');
        return new Response(JSON.stringify({ message: "Comercio actualizado con éxito", status: 200 }), { status: 200 });
    } catch (error) {
        console.error("Error:", error.message);
        return new Response(JSON.stringify({ message: "Error al actualizar comercio", status: 500 }), { status: 500 });
    }
}
