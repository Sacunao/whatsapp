;(function (){
    
    var entrada = document.getElementById("input");
    var contenedorMensajes = document.getElementById("chat");
    
    window.addEventListener("load", cargarPagina);
    
    function cargarPagina(){
        entrada.addEventListener("keyup", enviandoMensaje);
    }
    
    function enviandoMensaje(e){
        e.preventDefault();
        var ascci = e.keyCode;
        if (ascci == 13){
            e.returnValue = true;
            creandoMensaje(event);
            entrada.value = "";
            entrada.setAttribute("placeholder", "");
        } else {
            e.returnValue = false;
        } 
    }
    
    function creandoMensaje(event){
        event.preventDefault;
        var texto = entrada.value;

        var contenedor = entrada.parentElement.parentElement.parentElement.parentElement;
        var chat = contenedor.children[1];

        var caja = document.createElement("div");
        caja.classList.add("w-message", "w-message-out");
        chat.appendChild(caja);

        var mensaje = document.createElement("div");
        mensaje.classList.add("w-message-text");
        caja.appendChild(mensaje);

        var parrafo = document.createElement("p");
        parrafo.innerHTML = texto;
        mensaje.appendChild(parrafo);

        var tiempo = document.createElement("div");
        tiempo.classList.add("time");
        mensaje.appendChild(tiempo);
        tiempo.innerHTML = time(); 
    };

    //Creando confunciones reciclables
    // function creandoMensaje(e){
    //     e.preventDefault;
    //     var mensaje = entrada.value.trim();
    //     var caja = crearElementos("div", ["w-mensagge", "w-mensagge-out"], "", contenedorMensajes);
    //     var mensaje = crearElementos("div", ["w-mensagge-text"], "", caja);
    //     var tiempo = crearElementos("div", ["time"], time, mensaje);
    //     var parrafo = document.createElement("p");
    //     parrafo.innerHTML = mensaje;
    //     mensaje.insertbefore(parrafo, mensaje.lastChild);
        
    // }

    // function crearElementos(elemento, clases = [], texto, contenedor){
    //     var nuevo = document.createElement(elemento);
    //     nuevo.agregarClases(clases);
    //     nuevo.innerHTML = texto;
    //     contenedor.appendChild(nuevo);
    //     return nuevo;
    // }

    // function agregarClases(clases) {
    //     var l = clases.length;
    //     if (l > 0) {
    //         for (var i = 0; i < l; i++) {
    //             this.classList.add(clases[i]);
    //         }
    //     }
    // };

    function time(){
        var fecha = new Date();
        var hora = fecha.getHours();
        var minuto = fecha.getMinutes();
            if (minuto < 10) {
                minuto = "0" + minuto;
            }
        var horaImprimible = hora + " : " + minuto;
        return horaImprimible;
    }
})();