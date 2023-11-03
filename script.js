function validarFormulario() {
    var campo = document.getElementById("campo");
    var alerta = document.getElementById("alerta");
    var iconoPeligro = document.getElementById("icono-peligro");
  
    if (campo.value.trim() === "") {
      alerta.style.display = "block"; // Mostrar la alerta
      iconoPeligro.style.display = "inline"; // Mostrar el icono de peligro
      campo.classList.add("error"); // Agregar una clase de estilo para resaltar el campo con error
    } else {
      alerta.style.display = "none"; // Ocultar la alerta si el campo está lleno
      iconoPeligro.style.display = "none"; // Ocultar el icono de peligro
      campo.classList.remove("error"); // Eliminar la clase de estilo de error
    }
  }