
let carrito = [];

let productos = [
  {
    nombre: "Speed",
    precio: 300
  },
  {
    nombre: "Speed XL",
    precio: 400
  },
  {
    nombre: "Hodlmoser",
    precio: 3000
  },
  {
    nombre: "Agua",
    precio: 200
  }
];

function agregarProducto() {
  let productoIndex = parseInt(prompt("Ingrese el número del producto a comprar:\n\n1. Speed - $300\n2. Speed XL - $400\n3. Hodlmoser - $3000\n4. Agua - $200")) - 1;

  let cantidad = 0;

  do {
    cantidad = parseInt(prompt("Ingrese la cantidad de productos a comprar:"));

    if (!Number(cantidad) || cantidad <= 0) {
      alert("Por favor, ingrese una cantidad válida.");
    }

  } while (!Number(cantidad) || cantidad <= 0);

  let producto = {
    nombre: productos[productoIndex].nombre,
    precio: productos[productoIndex].precio,
    cantidad: cantidad
  };

  carrito.push(producto);

  alert("Producto agregado al carrito");
}

function mostrarCarrito() {
  let subtotal = 0;
  let total = 0;

  let mensaje = "Productos en el carrito:\n\n";

  for (let i = 0; carrito[i]; i++) {
    let producto = carrito[i];

    subtotal += producto.precio * producto.cantidad;

    mensaje += producto.nombre + " x " + producto.cantidad + " = " + (producto.precio * producto.cantidad) + "\n";
}


  let impuesto = subtotal * 0.21;
  total = subtotal + impuesto;

  mensaje += "\nSubtotal: $" + subtotal + "\nImpuesto (iva 21%): $" + impuesto + "\nTotal: $" + total;

  alert(mensaje);
}

let nombre = prompt("Bienvenido a la tienda de SPEED UNLIMITED. Por favor, ingrese su nombre:");

alert("Hola, " + nombre + ". Bienvenido a continuacion le mostraremos los productos de nuestra linea.");

let agregar = true;

while (agregar) {
  agregarProducto();

  let continuar = prompt("¿Desea agregar otro producto? (s/n)");

  if (continuar === "n") {
    agregar = false;
  }
}

mostrarCarrito();



