// const filas = document.getElementById('table-row');
// console.log(filas);



// const agregarJuegos = ()=>{
//   const codigo = document.getElementById('input-codigo').value;
//   console.log(codigo);
//   const fila = document.createElement('th');
//   fila.innerHTML = codigo;
//   fila.style = 'color: white';
//   document.getElementById('table-row').appendChild(fila);
// };

// let juegoAgregado = [];

// const agregarJuegos = ()=>{
//   const codigo = document.getElementById('input-codigo').value;
//   const nombre = document.getElementById('input-nombre').value;
//   const categoria = document.getElementById('input-categoria').value;
//   const descripcion = document.getElementById('text-area').value;
//   if (codigo.length === 0) {
//     return alert ('no se admiten campos vacios')
//   }
//   juegoAgregado.push(codigo,nombre,categoria,descripcion);
//   console.log(juegoAgregado);
//   printTableRow(juegoAgregado);
// };

// const printTableRow = (code)=>{
//   let rowToDelete = document.getElementById('input-codigo');
//   rowToDelete.innerHTML = ''; 
//   if (code.length !==0) {
//     code.map((juego,i)=>{
      
//       const fila = document.createElement('tr');
//       fila.innerHTML = `<td>${juego}</td><button onClick="deleteItem(${i})"`;
//       fila.style = 'color: white';
//       document.getElementById('tabla-desktop').appendChild(fila);
//     })
//   }
// };


// const deleteItem = (index)=>{
//   juegoAgregado.splice(index, 1);
//   printTableRow(juegoAgregado);
// };



// const editarJuego = ()=>{
//   const userInput = document.getElementById('')
// }


// let nuevoJuego = [
//   {
//     codigo: 123,
//     nombre: 'CS-global',
//     categoria: 'estrategia',
//     descripcion: 'descripcion breve',
//     publicado: true,
//     opciones: ''
//   },
//   {
//     codigo: 124,
//     nombre: 'war thunder',
//     categoria: 'estrategia',
//     descripcion: 'descripcion breve',
//     publicado: true,
//     opciones: ''
//   },
//   {
//     codigo: 125,
//     nombre: 'Rocket Arena',
//     categoria: 'estrategia',
//     descripcion: 'descripcion breve',
//     publicado: true,
//     opciones: ''
//   }
// ];

// let crearTabla = ()=>{
//   let stringTabla = "<tr><th>Codigo</th><th>Nombre</th><th>Categoria</th><th>Descripcion</th><th>Publicado</th><th>Opciones</th></tr>"

//   for(let juego of nuevoJuego){
//     let fila = "<tr><td>"
//     fila += juego.codigo;
//     fila += "</td";
//     fila = "<td>";
//     fila += juego.nombre;
//     fila += "</td";
//     fila = "<td>";
//     fila += juego.categoria;
//     fila += "</td";
//     fila = "<td>";
//     fila += juego.descripcion;
//     fila += "</td";
//     fila = "<td>";
//     fila += juego.publicado;
//     fila += "</td";
//     fila = "<td>";
//     fila += juego.opciones;
//     fila += "</td";

//     fila += "</tr>"
//     stringTabla += fila;
//   }
//   return stringTabla;
// };

// document.getElementById('admin-table').appendChild.innerHTML = crearTabla(nuevoJuego);





