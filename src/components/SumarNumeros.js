import imagen from './../assets/imagen/anime.jpg'

function SumarNumeros(){

    const SumarNumeros = (num1, num2) =>{
        var suma = num1 + num2;
        console.log("La suma es " + suma);
    }

    var imageSize = {
        width: "150px"
    }

    return (<div>
        <h1>Componente Sumar Numeros</h1>

        <button onClick={ () => SumarNumeros (7,9)}>
            Sumar 7 + 9
        </button>
        <button onClick={ () => SumarNumeros (6,5)}>
            Sumar 6 + 5
        </button>
        <br/>
        <br/>
        <img src={imagen} style={imageSize}/>

    </div>)

}

export default SumarNumeros;