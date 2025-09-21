let listaDeAmigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombreAmigo = input.value.trim();

    // Validar que no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Validar que no esté repetido
    if (listaDeAmigos.includes(nombreAmigo)) {
        alert("Este nombre ya fue añadido.");
        input.value = "";
        return;
    }

    // Guardar en la lista
    listaDeAmigos.push(nombreAmigo);

    // Crear un nuevo elemento <li>
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombreAmigo;

    // Agregarlo al <ul id="listaAmigos">
    const lista = document.getElementById('listaAmigos');
    lista.appendChild(nuevoElemento); // Agregar el <li> con el nombre al <ul> visible

    // Limpiar el input
    input.value = "";
    input.focus(); // Para que el usuario pueda escribir el siguiente nombre
    }
    
    //Se necesita veriicación para que funcione, hasta ahora nada
    // Validar si alguien está en lista
    function sortearAmigo() {
     if (listaDeAmigos.length === 0) {
        alert("Primero debes añadir al menos un amigo");
        return;
    }

    // Generar número aleatorio de posición entre los nombres de la lista
    const indice = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoAleatorio = listaDeAmigos[indice];
    
     // Limpiar la lista visible de amigos
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    // Mostrar el resultado en <ul id="resultado">
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo seleccionado es: <strong>${amigoAleatorio}</strong></li>`;

    }
    