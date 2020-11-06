
// let miAmbiente = new Ambiente("muy calida", 5, 3, 2, "norte", false, 2, 3)
let miAmbiente = new Ambiente();

let botones = document.getElementsByClassName('temp_btn_onclick');



for( let i = 0; i < botones.length ; i++){
    botones[i].addEventListener('click', (evento) => {
        miAmbiente.setTemperatura(evento.path[1].name)
    });
}
document.getElementById('calcular').addEventListener('click', () => miAmbiente.calculoGlobal() );

// miAmbiente.calculoGlobal();
// document.getElementById("largo").onchange = miAmbiente.setLargo;
// document.getElementById("ancho").onchange = miAmbiente.setAncho;
// document.getElementById("alto").onchange = miAmbiente.setAlto;
// miAmbiente.setOrientacion();
// document.getElementById("ventanas").onchange = miAmbiente.setVentanas;
// document.getElementById("ocupantes").onchange = miAmbiente.setOcupantes;
// //Botón imprimir//
// function imprimir() {
//     window.print();
// }
//Botón guardar//