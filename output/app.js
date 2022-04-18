//aqui comienza editar about
//-----función que abre el div oculto-->
function editar_about() {
  document.getElementById("edit-about").style.display = "block";
  let texto = document.getElementById("about_me").innerText;
  console.log(texto);
}
function myFunction3(value) {
  document.getElementById("about_me").innerText = value;
}
function logMessage2(message) {
  console.log(message + "<br>");
}
//controla el enter
let textArea = document.getElementById("edit-about");
textArea.addEventListener("keyup", (e) => {
  logMessage(`key "${e.key}"  released [event:keyup]`);
  if (e.key == "Enter") {
    document.getElementById("edit-about").style.display = "none";
  }
});

let reader_about = new FileReader_about();
reader_about.readAsText(file);
reader_about.onload = function () {
  console.log(reader_about.result);
  document.getElementById("about_me").innerText = reader_about.result;
};
reader_about.onerror = function () {
  console.log(reader_about.error);
};


//aquí comienza editar footer
function cambiar_parrafo() {
  document.getElementById("edit-footer").style.display = "block";
  let texto = document.getElementById("text-footer").innerText;
  console.log(texto);
}

function myFunction2(value) {
  document.getElementById("text-footer").innerText = value;
}
function logMessage(message) {
  console.log(message + "<br>");
}

//controla el enter
let textarea = document.getElementById("edit-footer");
textarea.addEventListener("keyup", (e) => {
  logMessage(`key "${e.key}"  released [event:keyup]`);
  if (e.key == "Enter") {
    document.getElementById("edit-footer").style.display = "none";
  }
});

  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function () {
    console.log(reader.result);
    document.getElementById("text-footer").innerText = reader.result;
  };
  reader.onerror = function () {
    console.log(reader.error);
  };
  //aquí termina editar footer
/*----cargar el contenido de archivo externo y lo muestra para eso en el html agregar un input de tipo file
function showFile(input) {
  let file = input.files[0];
  alert(`File name: ${file.name}`);
  alert(`Last modified: ${file.lastModified}`);}
----*/
