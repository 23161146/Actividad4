

document.addEventListener('DOMContentLoaded', () => {

  const btnMenu = document.getElementById('btnMenu');
  const menuMovil = document.getElementById('menuMovil');

  if (btnMenu && menuMovil) {
    btnMenu.addEventListener('click', () => {
      const abierto = menuMovil.classList.toggle('flex');
      menuMovil.classList.toggle('hidden');
      btnMenu.setAttribute('aria-expanded', String(abierto));
    });

    menuMovil.querySelectorAll('a').forEach((enlace) => {
      enlace.addEventListener('click', () => {
        menuMovil.classList.add('hidden');
        menuMovil.classList.remove('flex');
        btnMenu.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const secciones = document.querySelectorAll('main section[id]');
  const enlacesNav = document.querySelectorAll('.nav-link');

  function marcarEnlaceActivo(idSeccion) {
    enlacesNav.forEach((enlace) => {
      enlace.classList.toggle('activo', enlace.getAttribute('href') === `#${idSeccion}`);
    });
  }

  const observadorScrollspy = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          marcarEnlaceActivo(entrada.target.id);
        }
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );

  secciones.forEach((seccion) => observadorScrollspy.observe(seccion));

  const elementosReveal = document.querySelectorAll('.reveal');

  const observadorReveal = new IntersectionObserver(
    (entradas, observador) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('reveal--visible');
          observador.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elementosReveal.forEach((el) => observadorReveal.observe(el));

  const btnArriba = document.getElementById('btnArriba');

  if (btnArriba) {
    window.addEventListener('scroll', () => {
      btnArriba.classList.toggle('visible', window.scrollY > 480);
    });

    btnArriba.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const formContacto = document.getElementById('formContacto');
  const mensajeEstado = document.getElementById('mensajeEstadoForm');

  if (formContacto) {
    formContacto.addEventListener('submit', (e) => {
      e.preventDefault();

      const nombre = document.getElementById('nombreContacto').value.trim();
      const correo = document.getElementById('correoContacto').value.trim();
      const mensaje = document.getElementById('mensajeContacto').value.trim();
      const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(correo);

      mensajeEstado.classList.remove('hidden', 'text-red-600', 'text-emerald-600');

      if (!nombre || !correo || !mensaje) {
        mensajeEstado.textContent = 'Completa nombre, correo y mensaje antes de enviar.';
        mensajeEstado.classList.add('text-red-600');
        return;
      }

      if (!correoValido) {
        mensajeEstado.textContent = 'Revisa el formato de tu correo electrónico.';
        mensajeEstado.classList.add('text-red-600');
        return;
      }
      mensajeEstado.textContent = `¡Gracias, ${nombre}! Este formulario es una demostración visual (no envía correos reales), pero tu mensaje se vería reflejado aquí.`;
      mensajeEstado.classList.add('text-emerald-600');
      formContacto.reset();
    });
  }
});
