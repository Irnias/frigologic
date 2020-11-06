function Ambiente(unaTemperatura) {

    this.Temperatura = unaTemperatura;
    this.Largo = null;
    this.Ancho = null;
    this.Alto = null;
    this.Orientacion = null;
    this.Cocina = null;
    this.Ventanas = null;
    this.Ocupantes = null;


    this.setTemperatura = (temp) => {
        if(!temp){
            console.log("error");
        }else{

            if (temp.toUpperCase() === "TEMPLADA" || temp.toUpperCase() === "CALIDA" || temp.toUpperCase() === "MUY CALIDA" ) {
                this.Temperatura = temp;
                return "Cargado correctamente";
            }else{
                alert('Valor inválido!');
                return "No cargado";
            }
            
        }
    }

    //SETTERS
    this.setLargo = (evento) => {
        var largo = parseFloat(evento.target.value);
        if (isNaN(largo) || largo == null || largo === 0) {
            alert('Valor inválido: introducir valor numérico separando los decimales con punto.');
        } else {
            this.Largo = largo;
            return largo;
        }
    }

    this.setAncho = (evento) => {
        var ancho = parseFloat(evento.target.value);
        if (isNaN(ancho) || ancho == null || ancho === 0) {
            alert('Valor inválido: introducir valor numérico separando los decimales con punto.');
        } else {
            this.Ancho = ancho;
            return ancho;
        }
    }
    this.setAlto = (evento) => {
        var alto = parseFloat(evento.target.value);
        if (isNaN(alto) || alto == null || alto === 0) {
            alert('Valor inválido: introducir valor numérico separando los decimales con punto.');
        } else {
            this.Alto = alto;
            return alto;
        }
    }
    this.setOrientacion = () => {
        var orientacion = document.getElementById("orientacion").value;
        this.Orientacion = orientacion;
        return orientacion;
    }
    this.setVentanas = (evento) => {
        var ventanas = parseFloat(evento.target.value);
        if (isNaN(ventanas) || ventanas == null) {
            alert('Valor inválido: introducir valor numérico.');
        } else {
            this.Ventanas = ventanas;
            return ventanas;
        }
    }
    this.setOcupantes = (evento) => {
        var ocupantes = parseFloat(evento.target.value);
        if (isNaN(ocupantes) || ocupantes == null || ocupantes < 1) {
            alert('Valor inválido: introducir valor numérico. La cantidad de ocupantes no puede ser inferior a 1.');
        } else {
            this.Ocupantes = ocupantes;
            return ocupantes;
        }
    }
    //METODO GLOBAL//
    this.calculoGlobal = () => {
        var coeficienteTemperatura = calcularTemperatura();
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
    const calcularTemperatura = () => {
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
        console.log(metroscubicos);
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
        var cocina= 50;
        // if (document.getElementById("cocina").checked) {
        //     cocina = 1000;
        // } else {
        //     cocina = 0;
        // }
        this.Cocina = cocina;
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
    }

}