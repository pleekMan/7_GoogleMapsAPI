var mapa // Mapa que vamos a modificar

/* Crear la variable posicionCentral con las coordenadas donde se va a centrar el mapa */
// Inicializa el mapa con un valor de zoom y una locación en el medio

var posicionCentral = {lat:48.858370, lng: 2.2944813};

function inicializarMapa () {
    /* Modificá la variable mapa con el constructor Map().
    Tendrás que asignarle un valor de zoom y
    un centro igual a la variable posicionCentral. */

  mapa = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: posicionCentral
  });

  geocodificadorModulo.inicializar();
  marcadorModulo.inicializar()
  direccionesModulo.inicializar()
  lugaresModulo.inicializar()
  streetViewModulo.inicializar()
}
