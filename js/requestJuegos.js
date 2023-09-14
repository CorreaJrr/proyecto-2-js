async function obtenerJuegos(id) {
    const response = await fetch(`http://localhost:3000/juegos/${id}`);
    const data = await response.json();
    const printMain = document.getElementById("mainJuegos");
    printMain.innerHTML = ""
    printMain.classList = "container-fluid"
    const printP = document.createElement("div")
    printP.innerHTML = `<div class="row"><div class="col-xs-12 mb-3">
    <h1 class="text-light fw-bold mt-5 gradient">${data.nombre}</h1></div><div class="col-lg-6"><iframe width="650" height="400" src="${data.video}" title="Counter-Strike: Global Offensive Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="col-lg-6"><img class="imgCs" src="${data.imgMain}" alt="cs" width="640px"><p class="text-light d-flex text-center">${data.descripcionBreve}</p></div></div>
    <div class="d-flex align-content-center justify-content-center align-items-center divBuy mt-4 mb-5">
        <a class="text-light text-decoration-none p-2 d-inline-block">${data.buttonGame}</a>
      </div>
      <div>
        <div id="carouselExampleIndicators" class="carousel slide mt-5 carrousell">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img src="${data.img1}" class="w-100" height="600px" alt="cs-go-1">
            </div>
            <div class="carousel-item">
              <img src="${data.img2}" class="d-block w-100" height="600px" alt="cs-go-2">
            </div>
            <div class="carousel-item">
              <img src="${data.img3}" class="d-block w-100" height="600px"  alt="cs-go-3">
            </div>
            <div class="carousel-item">
              <img src="${data.img4}" class="d-block w-100" height="600px" alt="cs-go-4">
            </div>
            <div class="carousel-item">
              <img src="${data.img5}" class="d-block w-100" height="600px" alt="cs-go-5">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <hr>
      <div class="row text-light">
        <div class="col-lg-8 mt-5">
          <h6 class="fw-bold">REQUISITOS DEL SISTEMA</h6>
          <p>${data.requisitos}
          </p>
        </div>
        <div class="col-lg-4 d-flex justify-content-center">
          <div class="card" style="width: 25rem;">
            <div class="card-body cardInfo">
              <h6 class="fw-bold text-center">MÁS INFO</h6>
              <p class="text-light"><span>Título:</span> Counter-Strike: Global Offensive <br> <span>Género:</span> Acción, Free to play <br> <span>Desarrollador:</span> Valve, Hidden Path Entertainment <br> <span>Editor:</span> Valve <br> 
              <span>Fecha de lanzamiento:</span> 21 AGO 2012 <br> <span>Reseñas:</span> Muy positivas <br> *Incluye <i>violencia intensa y sangre</i></p>
            </div>
          </div> 
        </div>
      </div>
      <div class="text-light mt-3">
        <h6 class="fw-bold">ACERCA DE ESTE JUEGO</h6>
        <p>${data.acercaJuego}</p>
      </div>`
    printMain.appendChild(printP)
    // window.location.href = "PáginaDetalleJuego1.html";
    alert("hola")
}

const imageFun = document.querySelectorAll(".imgFuncion");
console.log(imageFun);
imageFun.forEach(d => {
  d.addEventListener('click' , obtenerJuegos())
});
