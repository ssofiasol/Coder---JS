class Producto {
    constructor (nombre, precio, porcentageDescuento = 0) {
        this.nombre = nombre.toLowerCase();        
        this.precio = parseInt(precio);
        this.porcentageDescuento = porcentageDescuento;
    }
}

class ItemCarrito {
    constructor (cantidad, producto) {
        this.cantidad = parseInt(cantidad);
        this.producto = producto;
    }

    agregarCantidad = (numero) => {
        this.cantidad += numero;
    }
}

class Carrito {
    constructor() {
        this.items=[];
    }

    agregarItem = (item) => {
        let itemEncontrado = this.items.find(i => item.producto === i.producto);
        if (itemEncontrado) {
            itemEncontrado.agregarCantidad(item.cantidad);
        }
        else {
            this.items.push(item);
        }
        
    }

    calcularTotal = () => {
        let total = 0;
        for (const item of this.items) {
            total +=  item.cantidad * item.producto.precio * (100 - item.producto.porcentageDescuento) / 100;
        }

        return total
    }
}

const taza = new Producto("Taza", 1200, 25);
const combo = new Producto("Combo", 3000);
const bowl = new Producto("Bowl", 1500, 20);
const mate = new Producto("Mate", 500);
const maceta = new Producto("Maceta", 2500);
const florero = new Producto("Florero", 2000, 15);
const carrito = new Carrito();

let precio = 0;
let agregarMasProductos = "si";
let total = 0;

function seleccionarProducto()
{
    let producto = "¿Qué le gustaría elegir? \n";
    producto+= "1. Tazas \n";
    producto+= "2. Combo (taza + plato)\n";
    producto+= "3. Bowls\n";
    producto+= "4. Mates \n";
    producto+= "5. Macetas \n";
    producto+= "6. Floreros";
    
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
            carrito.agregarItem(new ItemCarrito(cantidad, taza))
            console.log("Seleccionó Tazas");
            break;
        }
        case 2: 
        {
            carrito.agregarItem(new ItemCarrito(cantidad, combo))
            console.log("Seleccionó Combo (taza + plato)");
            break;
        }
        case 3: 
        {
            carrito.agregarItem(new ItemCarrito(cantidad, bowl))            
            console.log("Seleccionó Bowls");
            break;
        }
        case 4: 
        {
            carrito.agregarItem(new ItemCarrito(cantidad, mate))            
            console.log("Seleccionó Mates");
            break;
        }
        case 5: 
        {
            carrito.agregarItem(new ItemCarrito(cantidad, maceta))
            console.log("Seleccionó Macetas");
            break;
        }
        case 6: 
        {
            carrito.agregarItem(new ItemCarrito(cantidad, florero))
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
    mostrarDetalle(carrito.calcularTotal(), carrito.items);
}


function calcularIVA(total) {
    return total * 0.21;
}

function calcularTotalConIVA(total) {
    return total * 1.21;
}

function mostrarDetalle(total, itemsDelCarrito){
    let textoItems = itemsDelCarrito.sort((a,b) => compararNombresProducto(a.producto, b.producto)).map(item => "-Producto: " + item.producto.nombre + " -Cantidad: " + item.cantidad + " -Precio por unidad: " + item.producto.precio).join("\n");
    let textoDescuentos = itemsDelCarrito.filter(itemActual => itemActual.producto.porcentageDescuento > 0).map(itemConDescuento => `${itemConDescuento.producto.nombre} (${itemConDescuento.producto.porcentageDescuento}%)`)
    
    let texto = textoItems + "\n" 
    if(textoDescuentos.length > 0){
        texto += "Los productos con descuento son: \n" + textoDescuentos.join("\n") + "\n"
    }
    
    texto +="Su total hasta aquí es: $" + total + "\n"
    + "Su total de IVA es: $"  + calcularIVA(total) + "\n"
    + "Su total final es: $" + calcularTotalConIVA(total)

    alert (texto); 
} 

function compararNombresProducto(a, b) {
    if (a.nombre > b.nombre) {
      return 1;
    }
    if (a.nombre < b.nombre) {
      return -1;
    }
    return 0;
  }
