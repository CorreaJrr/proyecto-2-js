// import { printTable } from "./script.js";
const contenido = document.getElementById('contenido');
const formulario = document.getElementById('formulario');
const button = document.getElementById('btn');
// const editData = document.getElementById('formEdit');
const formularioEditado = document.getElementById('formEdit');



const getAllGames = async ()=>{
    try {
        const resp = await fetch('http://localhost:3000/juegos');
        const data = await resp.json();
        printTable(data);
    } catch (error) {
        console.log(error);
    }
};

const createGames = async ()=>{
    const newUser = getData();

    try{
     const response = await fetch('http://localhost:3000/juegos', {
     method: 'POST',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify(newUser)
     });
     
 
     if(response.ok){
         const jsonResponse = await response.json();
         const { nombre, categoria, descripcion} = jsonResponse;
        
         printTable(nombre,categoria,descripcion);   
     }
    
    }catch(error){
      console.log(error);
    }
    
};


const editGame = async (e)=>{
    e.preventDefault();
    const datos = new FormData(e.target);
    const datosEditados = Object.fromEntries(datos.entries());
    console.log(datosEditados);

    fetch(`http://localhost:3000/juegos/${datosEditados.idEdit}`,{
            method: 'PUT',
            body: JSON.stringify({
                nombre: `${datosEditados.nombreEdit}`,
                categoria: `${datosEditados.categoriaEdit}`,
                descripcion: `${datosEditados.descripcionEdit}`
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        });
};

formularioEditado.addEventListener('submit', editGame, false);

const deleteGames = async (id)=>{
   await fetch(`http://localhost:3000/juegos/${id}`, {
        method: 'DELETE',
      });
};



const printTable = (data)=>{
    // console.log(data);
    // contenido.innerHTML = '';
    for (let valor of data ){
        contenido.innerHTML += ` 
        <td>${valor.id}</td>
        <td>${valor.nombre}</td>
        <td>${valor.categoria}</td>
        <td>${valor.descripcion}</td>
        <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
        </svg></td>
        <td><button class="btn btn-dark id="delete onclick="deleteGames(${valor.id})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16" >
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
        </svg>
        <button class="btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-star" viewBox="0 0 16 16">
          <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z"/>
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
        </svg></button></td>
        `
    }
  }

  const getData = ()=>{
    const datos = new FormData(formulario);
    const datosCompletos = Object.fromEntries(datos.entries());
    console.log(datosCompletos);
    formulario.reset();
    return datosCompletos;
}  


btn.addEventListener('click', (event) => {
    event.preventDefault();
    createGames();
    
})


getAllGames();