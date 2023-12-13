import MostrarComercios from '/src/componentes/MostrarComercios';

function MostrarComerciosAnonimo() {

    return (
        <div className="bg-black">
            <MostrarComercios typeUser={"admin"}/>
        </div>
    );
}

export default MostrarComerciosAnonimo;

