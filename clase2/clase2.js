        const precioJeans = 3000;
        const precioRemeras = 2000;
        const stock = 5;
        let cantidad
        let precio = 0

        let pedido = prompt("¿Qué le gustaría elegir? - Jeans o Remeras");

        if (pedido.toLowerCase() === "remeras") {
            precio = precioRemeras
        }
        else if (pedido.toLowerCase() === "jeans"){
            precio = precioJeans
        }
        else {
            alert ("No tenemos ese producto") 
        }

        if (precio > 0) {
            cantidad = prompt("¿Cuántas unidades quiere?");
            if (cantidad > stock) {
                alert("No hay stock suficiente para completar su pedido. Faltan " + (cantidad - stock) + " unidades. " + stock + " fueron agregadas. Su total es: " + (stock * precio))
            }
            else if (cantidad <= stock) {
                alert ("Su total es: " + cantidad * precio)
            }
        }