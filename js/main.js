//Este programa se propone calcular las frigorías y watts del equipo de refrigeración que se ajuste al ambiente del usuario a partir de sus propiedades. Dicho resultado se refleja en un informe que puede descargarse o imprimirse//
//Al definir las propiedades del objeto se dejan los datos en blanco y se setean en duro debajo para debug, ya que la intención es que los datos los complete el usuario mediante buttons, imputs y checkbox en el HTML//

function Ambiente() {

    this.Temperatura = '';
    this.Largo = '';
    this.Ancho = '';
    this.Alto = '';
    this.Orientacion = '';
    this.Cocina = '';
    this.Ventanas = '';
    this.Ocupantes = '';
    this.multiplicadorTemperatura = '';
    this.superficieTotal = '';
    this.coeficienteOrientacion = '';
    this.coeficienteCocina = '';
    this.coeficienteVentanas = '';
    this.coeficienteOcupantes = '';
    this.totalFrigorias = '';

    this.setTemperatura = (temperatura) => { this.Temperatura = temperatura; };

    this.setLargo = (largo) => { this.Largo = largo; };

    this.setAncho = (ancho) => { this.Ancho = ancho; };

    this.setAlto = (alto) => { this.Alto = alto; };

    this.setOrientacion = (orientacion) => { this.Orientacion = orientacion; };

    this.setCocina = (cocina) => { this.Cocina = cocina; };

    this.setVentanas = (ventanas) => { this.Ventanas = ventanas };

    this.setOcupantes = (ocupantes) => { this.Ocupantes = ocupantes };

    this.getCoeficienteTemperatura = () => {

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

        this.multiplicadorTemperatura = multiplicadorTemperatura;
        return multiplicadorTemperatura;
    }

    this.getSuperficieTotal = () => {

        var superficieTotal = this.Largo * this.Ancho * this.Alto;
        
        this.superficieTotal = superficieTotal;
        return superficieTotal;
    }

    this.getCoeficienteOrientacion = () => {

        var coeficienteOrientacion;
        switch (this.Orientacion) {
            case "norte":
                coeficienteOrientacion = 200;
                break;
            case "sur":
                coeficienteOrientacion = 300;
                break;
            case "este":
                coeficienteOrientacion = 400;
                break;
            default:
                coeficienteOrientacion = 100;
                break;
        }

        this.coeficienteOrientacion = coeficienteOrientacion;
        return coeficienteOrientacion;
    }

    this.getCoeficienteCocina = () => {

        var coeficienteCocina;
        if (this.Cocina = true) {
            coeficienteCocina = 1000;
        } else {
            coeficienteCocina = 0;
        }

        this.coeficienteCocina = coeficienteCocina;
        return coeficienteCocina;
    }

    this.getCoeficienteVentanas = () => {

        var coeficienteVentanas = this.Ventanas * 500;

        this.coeficienteVentanas = coeficienteVentanas;
        return coeficienteVentanas;
    }

    this.getCoeficienteOcupantes = () => {

        var coeficienteOcupantes = this.Ocupantes * 150;

        this.coeficienteOcupantes = coeficienteOcupantes;
        return coeficienteOcupantes;
    }

    //FUNCIÓN PRINCIPAL//
    
    this.getFrigorias = () => {

        var totalFrigorias = (this.multiplicadorTemperatura * this.superficieTotal) + this.coeficienteOrientacion + this.coeficienteCocina + this.coeficienteVentanas + this.coeficienteOcupantes;

        this.totalFrigorias = totalFrigorias;
        return totalFrigorias;
    }

    this.getKcal = () => {

        var kcal = this.totalFrigorias * 1;

        return kcal;
    }

    this.getWatts = () => {

        var watts = this.totalFrigorias * 1.163;

        return watts;
    }

    this.getBtu = () => {

        var btu = this.totalFrigorias * 4;

        return btu;
    }

}

let miAmbiente = new Ambiente();
miAmbiente.setTemperatura("templada");
miAmbiente.setLargo(5);
miAmbiente.setAncho(3);
miAmbiente.setAlto(2);
miAmbiente.setOrientacion("este");
miAmbiente.setCocina(false);
miAmbiente.setVentanas(2);
miAmbiente.setOcupantes(2);
miAmbiente.getCoeficienteTemperatura();
miAmbiente.getSuperficieTotal();
miAmbiente.getCoeficienteOrientacion();
miAmbiente.getCoeficienteCocina();
miAmbiente.getCoeficienteVentanas();
miAmbiente.getCoeficienteOcupantes();
miAmbiente.getFrigorias();
miAmbiente.getKcal();
miAmbiente.getWatts();
miAmbiente.getBtu();

//Botón imprimir//
function imprimir() {
	window.print();
}

//Botón guardar//