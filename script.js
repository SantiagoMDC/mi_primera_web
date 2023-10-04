//alert("Hola este es mi Javascript");
/*let nombre = "Martin";
//alert(nombre);
let h2SobreMi = document.querySelector("#sobre-mi h2.acerca-de-mi");
if(nombre == "Martin"){
    h2SobreMi.innerHTML = "Acerca de Mi";
}else{
    alert("no se puede");
}

let parrafo = document.querySelector("#sobre-mi .texto p");
let nombre ="David Contreras";
let profesion ="FrontEnd Developer";
function cambiarTexto(nombre, profesion){
    let contenido = `Soy ${nombre}, ${profesion} en formación con capacidad de resolución de problemas, trabajo en equipo y adaptable a los cambios`;
    return contenido;
}


parrafo.innerHTML = cambiarTexto(nombre,profesion);

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};
*/
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});