const locales = [
  { nombre: "Pandora", top: "20%", left: "30%" },
  { nombre: "Lily Bookstore", top: "35%", left: "50%" },
  { nombre: "Manu Comics", top: "60%", left: "25%" },
  { nombre: "Power Red Helmet Store", top: "45%", left: "70%" },
  { nombre: "Musitte", top: "70%", left: "60%" }
];

const mapaGaleria = document.getElementById("mapaGaleria");

// Crear marcadores en el plano
locales.forEach(local => {
  const div = document.createElement("div");
  div.classList.add("local-marker");
  div.style.top = local.top;
  div.style.left = local.left;
  div.dataset.nombre = local.nombre;
  mapaGaleria.appendChild(div);
  local.element = div;

  // Popup animado al hacer clic
  div.addEventListener("click", () => {
    // Resaltar marcador
    locales.forEach(l => l.element.classList.remove("activo"));
    div.classList.add("activo");

    // Resaltar en lista
    lista.forEach(li => li.classList.remove("local-activo"));
    const liActivo = Array.from(lista).find(li => li.dataset.nombre === local.nombre);
    if (liActivo) liActivo.classList.add("local-activo");

    // Crear popup
    let popup = document.createElement("div");
    popup.classList.add("popup-nombre");
    popup.textContent = local.nombre;
    div.appendChild(popup);

    // Animar popup
    setTimeout(() => popup.classList.add("show"), 10);

    // Quitar popup después de 2 segundos
    setTimeout(() => {
      popup.classList.remove("show");
      setTimeout(() => div.removeChild(popup), 300);
    }, 2000);
  });
});

// Crear lista de locales
const listaUl = document.getElementById("listaLocales");
locales.forEach(local => {
  const li = document.createElement("li");
  li.textContent = local.nombre;
  li.dataset.nombre = local.nombre;
  listaUl.appendChild(li);
});

const lista = document.querySelectorAll("#listaLocales li");
const buscador = document.getElementById("buscadorLocales");

// Filtrar lista
buscador.addEventListener("input", () => {
  const texto = buscador.value.toLowerCase();
  lista.forEach(li => {
    li.style.display = li.dataset.nombre.toLowerCase().includes(texto) ? "block" : "none";
  });
});

// Click en lista
lista.forEach(li => {
  li.addEventListener("click", () => {
    lista.forEach(el => el.classList.remove("local-activo"));
    li.classList.add("local-activo");

    locales.forEach(local => local.element.classList.remove("activo"));
    const localActivo = locales.find(l => l.nombre === li.dataset.nombre);
    localActivo.element.classList.add("activo");

    // Mostrar popup temporal en marcador
    const div = localActivo.element;
    let popup = document.createElement("div");
    popup.classList.add("popup-nombre");
    popup.textContent = localActivo.nombre;
    div.appendChild(popup);
    setTimeout(() => popup.classList.add("show"), 10);
    setTimeout(() => {
      popup.classList.remove("show");
      setTimeout(() => div.removeChild(popup), 300);
    }, 2000);
  });
});
