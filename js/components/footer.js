const footer = document.querySelector('footer');

const fooTer = () => {
    return (footer.innerHTML = `<div>
    <div class="social-icons-container justify-content-around">
      <a href="" class="social-icon"></a>
      <a href="" class="social-icon"></a>
      <a href="" class="social-icon"></a>
      <a href="" class="social-icon"></a>
    </div>
    <ul class="footer-menu-container px-3">
      <li class="menu-item text-light">CONTACTO</li>
      <li class="menu-item text-light">ACERCA DE</li>
      <li class="menu-item text-light">SOPORTE</li>
    </ul>
    <hr class="text-light">
    <small class="text-light ">&copy; 2023 | Desarrollado por <b>RollingGames</b> | Todos los derechos reservados.</small>
  </div>` )
}

export default fooTer;