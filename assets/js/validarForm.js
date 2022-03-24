function validarDatos() {

  // window.event.preventDefault();

  const nombre = document.querySelector(".input_nombre").value;
  const email = document.querySelector(".input_email").value;
  const asunto = document.querySelector(".input_asunto").value;
  const mensaje = document.querySelector(".textarea_mensaje").value;


  if (nombre == "" || nombre.length <= 3) {
    window.event.preventDefault();
    alert("⚠ Campo nombre obligatorio y debe contener más de 3 caracteres");
    document.querySelector(".input_nombre").focus();
  } else if (email == "") {
    window.event.preventDefault();
    alert("⚠ Campo email obligatorio");
    document.querySelector(".input_email").focus();
  } else if (asunto == "" || asunto.length <= 3) {
    window.event.preventDefault();
    alert("⚠ Campo asunto obligatorio y debe contener más de 3 caracteres");
    document.querySelector(".input_asunto").focus();
  } else if (mensaje == "" || mensaje.length <= 50) {
    window.event.preventDefault();
    alert("⚠ Campo mensaje obligatorio y debe contener más de 50 caracteres");
    document.querySelector(".textarea_mensaje").focus();
  } else {
    alert("👍 Enviando mensaje... Me pondré en contacto contigo lo antes posible.");
  }
}

document.querySelector("form").addEventListener("submit", validarDatos)