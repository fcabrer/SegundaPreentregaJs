

const productos = [
{ id: 1, nombre: "AirShoes", precio: 35000 },

{ id: 2, nombre: "Jourdan", precio: 25000 },

{ id: 3, nombre: "Running", precio: 40000 },

{ id: 4, nombre: "AirForce", precio: 28000 },
];

alert(
"Bienvenido a nuestro sitio Runners - Seleccione el modelo que desea comprar"
);

let seleccionarProductos;
let seleccionarCantidad;
let total = 0;
const precioMaximo = 100000;
const envio = 2000;

const obtenerPrecioTotal = (cant, precio) => {
  return cant * precio;
};

const calcularEnvio = () => {
if (total >= precioMaximo) {
    alert("El envio es gratuito");
} else {
    total += envio;
    alert(`el costo de envio es ${envio}, el total es: ` + total);
}
};

const calcularMetodoDePago = () => {
let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo");
if (metodo == "tarjeta") {
    const interes = 10;
    total = total + (total * interes) / 100;
    alert(`tenes un interes de ${interes}, el total es: ${total}`);
} else if (metodo == "efectivo") {
    total -= 4000;
    alert("tenes un descuento de 4000, el total es:" + total);
}
};

const obtenerProductoSeleccionado = () =>
(seleccionarProductos = prompt(
    "1-AirShoes $35000 2-Jourdan $25000 3-Running $40000 4-AirForce $28000 "
));

obtenerProductoSeleccionado();

while (seleccionarProductos !== null) {
const producto = productos.find(
    (item) => item.nombre == seleccionarProductos
);

if (producto) {
    seleccionarCantidad = Number(
    prompt(
        `El producto seleccionado es ${producto.nombre}, indique la cantidad`
)
    );
    total = obtenerPrecioTotal(seleccionarCantidad, producto.precio);
    calcularMetodoDePago();
    calcularEnvio();
    break;
} else {
    alert("No se encontro el producto");
    obtenerProductoSeleccionado();
}
}
