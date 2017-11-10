lugaresModulo = (function () {
  var servicioLugares // Servicio para obtener lugares cercanos e información de lugares(como fotos, puntuación del lugar,etc).

  //var radioPorSlider;

    // Completa las direcciones ingresadas por el usuario a y establece los límites
    // con un círculo cuyo radio es de 20000 metros.
  function autocompletar () {
        /* Completar la función autocompletar(): autocompleta los 4 campos de texto de la
        página (las direcciones ingresables por el usuario).
        Para esto creá un círculo con radio de 20000 metros y usalo para fijar
        los límites de la búsqueda de dirección. El círculo no se debe ver en el mapa. */

        
        var autoEnBuscar = new google.maps.places.Autocomplete (document.getElementById("direccion"), {strictBounds: true}); // CONSTRAIN AUTOCOMPLETE STRICTLY TO BOUNDS (LATER DEFINED AND ATTACHED)
        var autoEnDesde = new google.maps.places.Autocomplete (document.getElementById("desde"), {strictBounds: true});
        var autoEnHasta = new google.maps.places.Autocomplete (document.getElementById("hasta"), {strictBounds: true});        
        
        var radioDeBusqueda = new google.maps.Circle( { center: mapa.center, radius: 20000})//, map: mapa });
        //radioDeBusqueda.setMap(mapa); // SET MAP RENDERS/DRAWS THE CIRCLE OVER THE MAP
        var areaDeBusqueda = radioDeBusqueda.getBounds(); // LatLngBounds Object
        
        autoEnBuscar.setBounds(areaDeBusqueda);          
        autoEnDesde.setBounds(areaDeBusqueda);        
        autoEnHasta.setBounds(areaDeBusqueda);
        
  }

    // Inicializo la variable servicioLugares y llamo a la función autocompletar
  function inicializar () {
    servicioLugares = new google.maps.places.PlacesService(mapa)
    autocompletar();

    document.getElementById("radio").addEventListener("mouseup", function(e){
      console.log("Mouse Up on Radio Slider");
      // A FUTURO: ACTUALIZAR EL RADIO DE BUSQUEDA radioDeBusqueda.radio cada vez que se mueva el slider DOM:radioS
    });
  }

    // Busca lugares con el tipo especificado en el campo de TipoDeLugar

  function buscarCerca (posicion) {
        /* Completar la función buscarCerca  que realice la búsqueda de los lugares
    del tipo (tipodeLugar) y con el radio indicados en el HTML cerca del lugar
    pasado como parámetro y llame a la función marcarLugares. */

       //document.getElementById("radioS")

       var radioDesdeSlider = parseInt((document.getElementById("radioS").value).slice(0,-4));

        var radioDeBusqueda = new google.maps.Circle( { center: mapa.center, radius: radioDesdeSlider });
        // SI LO QUEREMOS DIBUJAR
        //radioDeBusqueda.setOptions({fillOpacity: 0.35, fillColor:"#00AAFF", strokeOpacity:1, strokeColor:"#00AAFF"});
        //radioDeBusqueda.setMap(mapa)

        var tipoDeLugar = document.getElementById('tipoDeLugar').value;        
        var areaDeBusqueda = radioDeBusqueda.getBounds(); // LatLngBounds Object

        var searchRequest = {
          bounds: areaDeBusqueda,
          // IF bounds is specified, both location and radius will be ignored
          //location: mapa.center,
          //radius: radioDeBusqueda,
          types: [tipoDeLugar],
          //keyword: ["algo"],
          //rankBy: google.maps.places.RankBy.DISTANCE
        };
        
        //debugger;
        
        servicioLugares.nearbySearch(searchRequest, marcadorModulo.marcarLugares);
        
        /*
        function searchCallback(results, status){
          console.log("Resultados:" + results + " | Status: " + status);
        }
        */
      
    

  }
  return {
    inicializar,
    buscarCerca
  }
})()
