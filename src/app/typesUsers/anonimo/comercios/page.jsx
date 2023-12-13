import MostrarComerciosUsuarios from '/src/componentes/MostrarComerciosUsuarios';

function MostrarComerciosAnonimo() {

    return (
        <div className="bg-black">
            <MostrarComerciosUsuarios typeUser={"anonimo"}/>
        </div>
    );
}

export default MostrarComerciosAnonimo;

