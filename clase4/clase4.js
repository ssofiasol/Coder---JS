const precioTazas = 1200;
const precioCombo = 3000;
const precioBowls = 1500;
const precioMates = 500;
const precioMacetas = 2500;
const precioFloreros = 2000;

let cantidadTazas = 0;
let cantidadCombo = 0;
let cantidadBowls = 0;
let cantidadMates = 0;
let cantidadMacetas = 0;
let cantidadFloreros = 0;

let precio = 0;
let agregarMasProductos = "si";
let total = 0;

function seleccionarProducto()
{
    let producto = "¿Qué le gustaría elegir?\n";
    producto+= "1. Tazas \n";
    producto+= "2. Combo (taza + plato)\n";
    producto+= "3. Bowls\n";
    producto+= "4. Mates \n";
    producto+= "5. Macetas \n";
    producto+= "6. Floreros \n";
    
    let opcion =0;
 
    while(opcion!==1 && opcion!==2 && opcion!==3 && opcion!==4 && opcion!==5 && opcion!==6 )
    {
        opcion= parseInt(prompt(producto))
        if (opcion < 7 && opcion > 0) {
                do {
                   cantidad = prompt("¿Cuántas unidades quiere?");
                } while (isNaN(cantidad));           
        }
        switch(opcion){
        case 1: 
        {
            cantidadTazas += cantidad
            total += cantidad * precioTazas
            console.log("Seleccionó Tazas");
            break;
        }
        case 2: 
        {
            cantidadCombo += cantidad
            total += cantidad * precioCombo
            console.log("Seleccionó Combo (taza + plato)");
            break;
        }
        case 3: 
        {
            cantidadBowls += cantidad
            total += cantidad * precioBowls
            console.log("Seleccionó Bowls");
            break;
        }
        case 4: 
        {
            cantidadMates += cantidad
            total += cantidad * precioMates
            console.log("Seleccionó Mates");
            break;
        }
        case 5: 
        {
            cantidadMacetas += cantidad
            total += cantidad * precioMacetas
            console.log("Seleccionó Macetas");
            break;
        }
        case 6: 
        {
            cantidadFloreros += cantidad
            total += cantidad * precioFloreros
            console.log("Seleccionó Floreros");
            break;
        }
        default:
        {
            alert ("No tenemos ese producto");
            break;
        }
    }
    }
}

function inicializarCompra () {
    while (agregarMasProductos.toLowerCase() === "si") {    
        seleccionarProducto();
        
        agregarMasProductos = prompt("¿Quiere agregar más productos?");
    }    
    mostrarTotal(total);
}


function calcularDescuentoDel25(total) {
    return total * 0.75
}

function aplicaParaDescuentoDel25() {
    return (cantidadTazas > 0 || cantidadBowls > 0 || cantidadFloreros > 0)
}

function calcularIVA(total) {
    return total * 0.21;
}

function calcularTotalConIVA(total) {
    return total * 1.21
}

function mostrarTotal(total){
    let totalConDescuento = total;
    let texto = "";
    if(aplicaParaDescuentoDel25()){
        totalConDescuento = calcularDescuentoDel25(total)
        texto = "Su compra tuvo un descuento del 25%.\n"
    }
    texto += "Su total hasta aquí es: $" + totalConDescuento + "\n"
    + "Su total de IVA es: $"  + calcularIVA(totalConDescuento) + "\n"
    + "Su total final es: $" + calcularTotalConIVA(totalConDescuento)
    alert (texto); 
} 
