let precioProducto: number = Number(prompt("Ingrese el precio del producto"));
let cantidadProducto: number = Number(
  prompt("Ingrese la cantidad del producto")
);
let descuento: number = 0.1;
let precioCompra: number = precioProducto * cantidadProducto;
let precioConDescuento: number = precioCompra - precioCompra * 0.1;

if (precioCompra > 1000) {
  console.log("El precio de la compra es:", precioCompra);
} else {
  console.log("El precio de la compra es:", precioConDescuento);
}
