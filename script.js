

// <CLICKS EQUIS PARA CERRAR>
// Busca todos los botones de cerrar (uno por overlay) y los guarda en una lista
const botonesCerrar = document.querySelectorAll('.cerrar');

// Recorre cada botón de la lista, uno por uno
botonesCerrar.forEach(boton => {
    // A cada botón le agrega un "escuchador" de clicks
    boton.addEventListener('click', () => {
        // Al hacer click: sube desde el botón hasta encontrar su .contenedor-seccion,
        // y le quita la clase 'mostrar' para ocultarlo de nuevo
        boton.closest('.contenedor-seccion').classList.remove('mostrar')
    });
});
// </CLICKS EQUIS PARA CERRAR>



// <CLICKS OBJETOS>
// Busca todos los pertenencias clickeables de la escena (una sola vez, al cargar la página)
const pertenencias = document.querySelectorAll('.pertenencia');
// variable que guarda el sketch activo del gameboy
let instanciaGameboy = null;

// Recorre cada objeto, uno por uno
pertenencias.forEach(pertenencia => {
    // A cada pertenencia le agrega un "escuchador" de clicks
    pertenencia.addEventListener('click', () => {
        // Lee el data-target de la pertenencia clickeada, para saber cual es
        const destino = pertenencia.dataset.target;
        // Arma el id del overlay ("contenedor-" + destino) y le agrega la clase 'mostrar'
        document.getElementById('contenedor-' + destino).classList.add('mostrar');

        // si la pertenencia clickeada es la gameboy
        if (destino === 'gameboy') {
            // instanciaGameboy deja de ser null, para ser el sketch.
            // new p5(funcionAejecutar(js), id-contenedor(html)
            instanciaGameboy = new p5(sketchSerHumano, 'juegos-gameboy');
        }
    });
});
// </CLICKS OBJETOS>

// <CLICK FUERA DEL POPUP CIERRA>
// Busca todos los fondos de cada overlay
const contenedoresSeccion = document.querySelectorAll('.contenedor-seccion');

// Recorre cada fondo, uno por uno
contenedoresSeccion.forEach(contenedor => {
    // A cada fondo le agrega un "escuchador" de clicks
    contenedor.addEventListener('click', (e) => {
        // e.target es el elemento EXACTO donde cayó el click (puede ser el fondo,
        // o algo de adentro como la tarjeta .seccion o el botón cerrar)
        if (e.target === contenedor) {
            // Solo si el click fue directo sobre el fondo (no sobre su contenido),
            // le quita la clase 'mostrar' para ocultarlo
            contenedor.classList.remove('mostrar');
            if (contenedor.id === 'contenedor-gameboy' && instanciaGameboy) {
                instanciaGameboy.remove();
            }
        }
    });
});
// </CLICK FUERA DEL POPUP CIERRA>