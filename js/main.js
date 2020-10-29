//Este programa se propone calcular las frigorías y watts del equipo de refrigeración que se ajuste al ambiente del usuario a partir de sus propiedades. Dicho resultado se refleja en un informe que puede descargarse o imprimirse//
//Las propiedades del objeto se definen por constructor. Debajo están seteadas en duro para debug. El usuario seteará las propiedades mediante buttons, imputs y checkbox en el HTML//

function Ambiente(unaTemperatura, unLargo, unAncho, unAlto, unaOrientacion, esCocina, cantidadDeVentanas, cantidadDeOcupantes) {

    this.Temperatura = unaTemperatura;
    this.Largo = unLargo;
    this.Ancho = unAncho;
    this.Alto = unAlto;
    this.Orientacion = unaOrientacion;
    this.Cocina = esCocina;
    this.Ventanas = cantidadDeVentanas;
    this.Ocupantes = cantidadDeOcupantes;

    //METODO GLOBAL//
    
    this.calculoGlobal = () => {

        var coeficienteTemperatura = this.calcularTemperatura();
        var superficieTotal = this.calcularSuperficieTotal();
        var coeficienteOrientacion = this.calcularOrientacion();
        var coeficienteCocina = this.calcularCocina();
        var coeficienteVentanas = this.calcularVentanas();
        var coeficienteOcupantes = this.calcularOcupantes();

        var Frigorias = (coeficienteTemperatura * superficieTotal) + coeficienteOrientacion + coeficienteCocina + coeficienteVentanas + coeficienteOcupantes;
        var Kcal = Frigorias * 1;
        var Watts = Frigorias * 1.163;
        var Btu = Frigorias * 4;

        console.log(Frigorias);
        console.log(Kcal);
        console.log(Watts);
        console.log(Btu);
    }

    this.calcularTemperatura = () => {

        var multiplicadorTemperatura;
        switch (this.Temperatura) {
            case "calida":
                multiplicadorTemperatura = 60;
                break;
            case "muy calida":
                multiplicadorTemperatura = 70;
                break;
            default:
                multiplicadorTemperatura = 50;
                break;
        }

        return multiplicadorTemperatura;
    };

    this.calcularSuperficieTotal = () => {

        var metroscubicos;

        metroscubicos = this.Largo * this.Ancho * this.Alto;

        return metroscubicos;
    };

    this.calcularOrientacion = () => {

        var orientacion;
        switch (this.Orientacion) {
            case "norte":
                orientacion = 200;
                break;
            case "sur":
                orientacion = 300;
                break;
            case "este":
                orientacion = 400;
                break;

            default:
                orientacion = 100;
                break;
        }

        return orientacion;
    };

    this.calcularCocina = () => {
        var cocina;
        if (this.Cocina) {
            cocina = 1000;
        } else {
            cocina = 0;
        }

        return cocina;
    };

    this.calcularVentanas = () => {
        var ventanas;

        ventanas = this.Ventanas * 500;

        return ventanas;
    };

    this.calcularOcupantes = () => {

        var ocupantes;

        ocupantes = this.Ocupantes * 150;

        return ocupantes;
    };
}

let miAmbiente = new Ambiente("muy calida", 5, 3, 2, "norte", false, 2, 3)

miAmbiente.calculoGlobal();

//Botón imprimir//
function imprimir() {
    window.print();
}

//Botón guardar//