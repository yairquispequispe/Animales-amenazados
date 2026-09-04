 const filtroBusqueda = document.getElementById('Busqueda')
 const tarjetasAnimales = document.querySelector('.card')

  filtroBusqueda.addEventListener('input', ()  => {

    const textoUsarios = filtroBusqueda.value.toLowercase();

tarjetasAnimales.forEach(tarjeta => {
    
const nombreAnimal = tarjeta.querySelector('h3').textContent.toLowercase();


});
  }

