//Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos y mostrar por consola la media de ventas.
```js
const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];
```//


let totalSales = 0;

for (let i = 0; i < products.length; i++) {
  totalSales += products[i].sellCount;
}

const averageSales = totalSales / products.length;

console.log("Total de ventas: " + totalSales);
console.log("Media de ventas: " + averageSales);