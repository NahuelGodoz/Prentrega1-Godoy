

//Calculador de interes 
let dineroIn = 0
let meses = 0
let interes = 0
let value = prompt('Seleccione la Calculadora de Prestamos: \n1. Libre \n2. Banco \n3. Agregar')

if (value == "1" ) {
        dineroIn = Number(prompt('Ingrese la suma de dinero a pedir'))       
        tiempo = Number(prompt('Ingrese la cantidad de años'))
        interes = Number(prompt('Ingrese el interes a calcular'))
        let cantidadinteres =  (dineroIn * interes * tiempo / 100)
        let cantidadTotal = (dineroIn + cantidadinteres)
        let cuotas =  (tiempo * 12)
        let adicionalInteres = (cantidadTotal - dineroIn)
        alert('La cantidad total: ' + cantidadTotal + '\nLa cantidad de cuotas: ' + cuotas + "\nEl interes adicional: " + adicionalInteres )

    }     

    else if (value == "2"){
        dineroIn = Number(prompt('Ingrese la suma de dinero a pedir'))       
        tiempo = Number(prompt('Ingrese la cantidad de años'))
        let banco = Number(prompt('Bancos para pedir prestamos: \n1. Santander \n2. Provincia' ))
        
        if(banco  == 1){
            alert('Error por el momento el banco esta calculando el interes, intentelo mas tarde')
           
        }
       else if(banco == 2){

        cantidadinteres =  (dineroIn * 57 * tiempo / 100)
        cantidadTotal = (dineroIn + cantidadinteres)
        cuotas =  (tiempo * 12)
        adicionalInteres = (cantidadTotal - dineroIn)
        alert('La cantidad total: ' + cantidadTotal + '\nLa cantidad de cuotas: ' + cuotas + "\nEl interes adicional: " + adicionalInteres )
       }
    
    else if (banco == 3){
        class InfoB{
            constructor( nombre , porcentaje , disponible){
                this.nombre = nombre;
                this.porcentaje = porcentaje;
                this.disponible = disponible;
            }
        
        
            get_datos(){                     
                console.log("Nombre: ", this.nombre);
                console.log("Precio: ", this.porcentaje);
                console.log("disponible: ", this.disponible);
                console.log("");
            }
        }
        // lista de bancos 
        let listaBanco = [];
        
        
        for( let i = 0 ; i < 2 ; i = i + 1){
        
            let nombre = prompt("Ingrese el nombre del banco a agregar");
            let porcentaje = prompt("Ingrese el porcentaje de interes");
            let disponible = prompt("Ingrese si esta disponible");
        
            let infoB = new InfoB( nombre , porcentaje , disponible);
        
            listaBanco.push(infoB);
        }
        
        console.log(listaBanco);

        }
    }
else {
    alert('Opcion invalida')

}



class InfoB{
    constructor( nombre , porcentaje , disponible){
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.disponible = disponible;
    }


    get_datos(){                     
        console.log("Nombre: ", this.nombre);
        console.log("Precio: ", this.porcentaje);
        console.log("disponible: ", this.disponible);
        console.log("");
    }
}
// lista de bancos 
let listaBanco = [];


for( let i = 0 ; i < 2 ; i = i + 1){

    let nombre = prompt("Ingrese el nombre del banco a agregar");
    let porcentaje = prompt("Ingrese el porcentaje de interes");
    let disponible = prompt("Ingrese si esta disponible");

    let infoB = new InfoB( nombre , porcentaje , disponible);

    listaBanco.push(infoB);
}

console.log(listaBanco);