// main.js - versión única, robusta y sin listeners duplicados

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------- FORM (si existe) ---------------- */
  const contactoForm = document.getElementById('contactoForm');
if (contactoForm) {
    contactoForm.addEventListener('submit', (e) => {
      const nombre = document.getElementById('nombreApellido')?.value.trim() || '';
      const email = document.getElementById('email')?.value.trim() || '';
      const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
      const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!soloLetras.test(nombre)) {
        alert('El campo Nombre y Apellido solo puede contener letras y espacios.');
        e.preventDefault();
        return;
      }
      if (!formatoEmail.test(email)) {
        alert('Por favor ingresa un correo electrónico válido.');
        e.preventDefault();
        return;
      }
      // Envío válido: mostrar mensaje de éxito
      alert('El formulario fue enviado con éxito!');
      // opcional: contactoForm.reset();
    });
  }

  /* ---------------- PROMOCIONES (ARRAY COMPLETO) ---------------- */
  const promos = [
    { nombre:"ManuComics", tipo:"comiqueria", oferta:"Llevas 2 y obtené 50% OFF en la 2da unidad", descripcion:"Todos los clásicos de Marvel con descuento", imagen:"https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFydmVsfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000", enlace:"https://manubogliani.github.io/manucomics.galeria/promociones.html", badge:"DESCUENTO" },
    { nombre:"Lily Bookstore", tipo:"libreria", oferta:"Llevá 3 libros, pagá 2", descripcion:"Promoción en toda la sección de novelas", imagen:"https://cloudfront-us-east-1.images.arcpublishing.com/elcronista/EBC5FDSBUVA5TK7BID2W6VEDK4.png", enlace:"https://deoliva-13.github.io/TP-LocalComercial-SegundaEntrega/promociones.html", badge:"3x2" },
    { nombre:"Pandora Argentina", tipo:"accesorios", oferta:"Tu compra de Pulsera + collar por tan solo $299.999", descripcion:"Joyas únicas que celebran tus momentos más especiales.", imagen:"https://st2.depositphotos.com/11698096/49956/i/450/depositphotos_499567032-stock-photo-soest-germany-august-2021-pandora.jpg", enlace:"https://solsordelli99.github.io/Trabajo-obligatorio-Local-comercial/promociones.html", badge:"OFERTA" },
    { nombre:"Power Red Helmet Store", tipo:"jugueteria", oferta:"Compra 2, lleva 3", descripcion:"Los mejores cascos para tus aventuras", imagen:"https://i.pinimg.com/736x/e6/62/87/e66287f766d396443577303e7e4500ee.jpg", enlace:"https://poweredhelmetstore.vercel.app/pages/promociones.html", badge:"2x3" },
    { nombre:"ManuComics", tipo:"comiqueria", oferta:"10% OFF en compras superiores a $30.000", descripcion:"Válido en toda nuestra tienda", imagen:"https://figurasaescala.wordpress.com/wp-content/uploads/2015/01/wpid-img_236646838378868.jpeg", enlace:"https://manubogliani.github.io/manucomics.galeria/promociones.html", badge:"EXCLUSIVO" },
    { nombre:"Lily Bookstore", tipo:"libreria", oferta:"20% OFF en compras superiores a $30.000", descripcion:"Sumérgete en nuevos mundos de fantasía", imagen:"https://m.media-amazon.com/images/I/51ewXPe3gyL.jpg", enlace:"https://deoliva-13.github.io/TP-LocalComercial-SegundaEntrega/promociones.html", badge:"OFERTA" },
    { nombre:"Pandora Argentina", tipo:"accesorios", oferta:"Con tu compra de 3 anillos accede a un 10% de descuento", descripcion:"Diseños exclusivos para todos los gustos", imagen:"https://pandoraar.vtexassets.com/arquivos/ids/383424/183021C01_4.png?v=638866549810900000", enlace:"https://solsordelli99.github.io/Trabajo-obligatorio-Local-comercial/promociones.html", badge:"OFERTA" },
    { nombre:"Power Red Helmet Store", tipo:"jugueteria", oferta:"20% de descuento por compras superiores a $50.000", descripcion:"Edición especial Power Rangers", imagen:"https://atomix.blob.core.windows.net/images/uploads/2020/02/power-ranger--focus-0-0-1200-600.webp", enlace:"https://poweredhelmetstore.vercel.app/pages/promociones.html", badge:"2x3" },
    { nombre:"Musitte", tipo:"café", oferta:"3 Medialunas al precio de 2", descripcion:"Las mejores medialunas para acompañar tu café", imagen:"https://laramartinez6.github.io/musitte.galeria/interiormusitte.png", enlace:"https://laramartinez6.github.io/musitte.galeria/promociones.html", badge:"3x2" },
    { nombre:"Musitte", tipo:"café", oferta:"2 Cafés con 50% en el Segundo", descripcion:"Música en vivo y café", imagen:"https://fruitbasket.limepack.com/blog/wp-content/uploads/2024/02/coffee-shop-music-event.jpg", enlace:"https://laramartinez6.github.io/musitte.galeria/promociones.html", badge:"DESCUENTO" }
  ];

  const container = document.getElementById('promos-container');
  const storeFilter = document.getElementById('store-filter');

  function renderPromos(tipo = '') {
    if (!container) return;
    container.innerHTML = '';
    promos
      .filter(p => !tipo || p.tipo === tipo)
      .forEach(promo => {
        const card = document.createElement('div');
        card.className = 'promo-card';
        card.innerHTML = `
          <div class="promo-badge">${promo.badge}</div>
          <img src="${promo.imagen}" alt="${promo.nombre}" class="promo-img">
          <div class="promo-content">
            <h3 class="promo-store">${promo.nombre}</h3>
            <p class="promo-offer">${promo.oferta}</p>
            <p class="promo-text">${promo.descripcion}</p>
            <a href="${promo.enlace}" class="promo-link" target="_blank" rel="noopener">Ver detalles →</a>
          </div>
        `;
        container.appendChild(card);
      });
  }

  if (container) {
    renderPromos();
    if (storeFilter) storeFilter.addEventListener('change', (e) => renderPromos(e.target.value));
  }

  /* ---------------- FILTRADO LOCALES (si existen) ---------------- */
  const categoriasBtns = document.querySelectorAll('.categorias button');
  const logoItems = document.querySelectorAll('.logo-item, .logo-wrapper');

  if (categoriasBtns.length) {
    categoriasBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        categoriasBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = (btn.dataset.cat || '').toLowerCase();
        if (!logoItems.length) return;
        logoItems.forEach(li => {
          if (!cat || cat === 'todos') { li.style.display = ''; return; }
          li.style.display = li.classList.contains(cat) ? '' : 'none';
        });
      });
    });
  }

  /* ---------------- MAPA DE LOCALES (reemplazo dinámico) ---------------- */
  (function initMapa() {
    const listaUl = document.getElementById('listaLocales');
    const buscador = document.getElementById('buscadorLocales');
    const mapEl = document.getElementById('map');
    if (!mapEl || !listaUl) return;

    // Centro: Av. Córdoba 550
    const centro = [-34.6037, -58.3816];

    // Extraer locales desde .logo-item / .logo-wrapper si existen (soporta data-lat/data-lon)
    const domItems = Array.from(document.querySelectorAll('.logo-item, .logo-wrapper'));
    const localesMapa = [];

    if (domItems.length) {
      domItems.forEach((el, idx) => {
        const name = (el.dataset.name?.trim())
          || (el.querySelector('img')?.alt?.trim())
          || (el.querySelector('h3')?.textContent?.trim())
          || (el.querySelector('.descripcion')?.textContent?.trim()?.split('.')[0])
          || `Local ${idx + 1}`;

        const lat = Number.parseFloat(el.dataset.lat);
        const lon = Number.parseFloat(el.dataset.lon);

        const offset = 0.00025 * (idx - Math.floor(domItems.length / 2));
        localesMapa.push({
          nombre: name,
          lat: Number.isFinite(lat) ? lat : centro[0] + offset,
          lon: Number.isFinite(lon) ? lon : centro[1] - offset
        });
      });
    } else {
      // fallback estático mínimo
      localesMapa.push(
        { nombre: "Pandora", lat: centro[0], lon: centro[1] },
        { nombre: "Lily Bookstore", lat: centro[0] + 0.0003, lon: centro[1] - 0.0003 },
        { nombre: "Manu Comics", lat: centro[0] - 0.0003, lon: centro[1] + 0.0003 }
      );
    }

    // Si Leaflet no está disponible, rellena la lista y sale
    if (typeof L === 'undefined') {
      console.warn('Leaflet no cargado. Incluí Leaflet en el HTML para ver el mapa.');
      localesMapa.forEach(local => {
        const li = document.createElement('li');
        li.textContent = local.nombre;
        li.dataset.nombre = local.nombre;
        listaUl.appendChild(li);
      });
      return;
    }

    // Inicializar mapa
    const map = L.map(mapEl, { scrollWheelZoom: false }).setView(centro, 17);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);

    const marcadores = {};
    listaUl.innerHTML = '';

    localesMapa.forEach((local, i) => {
      const key = `${local.nombre}-${i}`;
      const marker = L.marker([local.lat, local.lon]).addTo(map).bindPopup(`<strong>${local.nombre}</strong>`);
      marcadores[key] = marker;

      const li = document.createElement('li');
      li.textContent = local.nombre;
      li.dataset.key = key;
      li.tabIndex = 0;
      listaUl.appendChild(li);
    });

    // Forzar redraw si el contenedor estaba oculto
    setTimeout(() => { try { map.invalidateSize(); } catch (err) {} }, 200);

    const listaItems = Array.from(listaUl.querySelectorAll('li'));

    // búsqueda en tiempo real
    buscador?.addEventListener('input', () => {
      const q = buscador.value.trim().toLowerCase();
      listaItems.forEach(li => {
        li.style.display = li.textContent.toLowerCase().includes(q) ? '' : 'none';
      });
    });

    // interacción lista -> mapa
    listaItems.forEach(li => {
      const abrir = () => {
        const key = li.dataset.key;
        const marker = marcadores[key];
        if (!marker) return;
        map.setView(marker.getLatLng(), 19, { animate: true });
        marker.openPopup();
        listaItems.forEach(el => el.classList.remove('local-activo'));
        li.classList.add('local-activo');
      };
      li.addEventListener('click', abrir);
      li.addEventListener('keydown', (e) => { if (e.key === 'Enter') abrir(); });
    });

  })(); // initMapa()

}); // DOMContentLoaded

// Buscar Locales
