const OPCION_SALIR = 6;
const IVA = 1.21;

let productos = [
  { id:1, nombre:"Camiseta Poliéster", precio:1200, categoria:"ropa" },
  { id:2, nombre:"Jeans Regular Fit", precio:3500, categoria:"ropa" },
  { id:3, nombre:"Sudadera con Capucha", precio:2500, categoria:"ropa" },
  { id:4, nombre:"Zapatillas Running", precio:5000, categoria:"calzado" },
  { id:5, nombre:"Mochila Campus", precio:3000, categoria:"accesorios" },
  { id:6, nombre:"Cinturón Cuero", precio:800, categoria:"accesorios" },
  { id:7, nombre:"Gorra Béisbol", precio:600, categoria:"accesorios" }
];

let carrito = []; 
let historial = [];

function verProductosCategoria(categoria) {
  let mensaje = 'Lista de productos: \n';
  productos.forEach(el =>{
    if(el.categoria === categoria){
      mensaje += `${el.id}-${el.nombre}  $${el.precio} \n`;
    }
  });

  const opcion = parseInt(prompt(mensaje));

  const productoSeleccionado = productos.find(producto => producto.id === opcion);
  carrito.push(productoSeleccionado);
  alert("Producto añadido al carrito correctamente");
}

function mostrarCarrito() {
  let mensaje = 'Carrito: \n';
  carrito.forEach(el =>{               
    mensaje += `${el.id}-${el.nombre}  $${el.precio} \n`;
  });
  const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
  mensaje += `TOTAL                    $${total}`;
  alert(mensaje);
}

function finalizarCompra() {
  let mensaje = 'Resumen de la compra: \n';
  const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
  mensaje += `TOTAL                    $${total}`;
  mensaje += "\n¿Desea realizar la compra? (si/no)";
  const respuesta = prompt(mensaje);
  if(respuesta.toLowerCase() === "si"){
    let compra = {
      numero: Math.round(Math.random() * 10000000 + 100000),
      nombre: prompt("Ingrese su nombre"),
      direccion: prompt("Ingrese su dirección"),
      total: total,
      productos: carrito
    };
    historial.push(compra);
    alert("Compra realizada con éxito. Su número de seguimiento es " + compra.numero);
    carrito = [];
  }
}

let opcion = parseInt(prompt("Elige la operación que deseas: \n 1-Ver ropa \n 2-Ver calzado \n 3-Ver accesorios \n 4-Mostrar carrito \n 5-Finalizar compra \n 6-Salir"));

while(opcion !== OPCION_SALIR) {
  switch(opcion) {
    case 1: 
      verProductosCategoria("ropa");
      break;
    case 2: 
      verProductosCategoria("calzado");
      break;
    case 3: 
      verProductosCategoria("accesorios");
      break;
    case 4: 
      mostrarCarrito();
      break;
    case 5: 
      finalizarCompra();
      break;
    default:
      alert("Ingresó una opción inválida.");
      break;
  }

  opcion = parseInt(prompt("Elige la operación que deseas: \n 1-Ver ropa \n 2-Ver calzado \n 3-Ver accesorios \n 4-Mostrar carrito \n 5-Finalizar compra \n 6-Salir"));
}

alert("Gracias, vuelva pronto.");
