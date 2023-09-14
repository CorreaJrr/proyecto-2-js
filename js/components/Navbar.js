const header = document.querySelector('header');

const navBar = () => {
    const user = JSON.parse(localStorage.getItem('userLog'));

    return (header.innerHTML = `<div class="logo p-5">
    <a href="index.html"><img class="roll-in-blurred-top mt-2" src="./img/Logo img.png" alt="Logo RollingGames" width="150px" height="100px"></a>
  </div>
  <div class="textNav">
    <button class="installBtn px-3 alig roll-in-blurred-top">Instalar</button>
  </div>
  <nav class="navbar navbar-expand-lg tracking-in-expand-fwd p-5">
    <div class="container-fluid">
      <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav text-white">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"></a>
          </li>
          <li class="nav-item">
            <a class="nav-link navButton text-light fw-bold" href="#">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link navButton text-light fw-bold" href="#">TIENDA</a>
          </li>
          <li class="nav-item">
            <a class="nav-link navButton text-light fw-bold" href="#">INICIAR SESIÓN</a>
          </li>
          <li class="nav-item">
            <a class="nav-link navButton text-light fw-bold" href="#">REGISTRARSE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true"></a>
          </li>
        </ul>
      </div>
    </div>`)
}

export default navBar;