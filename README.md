# Portafolio — Ángel Omar Santos Ríos

Portafolio personal de una sola página, enfocado en **diseño de interfaces
(UI/UX)** y **bases de datos** (modelado, SQL, NoSQL y optimización de
consultas), construido con **Tailwind CSS**. Muestra quién soy, en qué
herramientas estoy trabajando y los proyectos que estoy desarrollando
como práctica de diseño y de datos.
---

## Descripción del proyecto

- **Framework CSS:** Tailwind CSS, cargado vía CDN (`cdn.tailwindcss.com`),
  sin paso de build ni instalación.
- **Plantilla base:** [**Picto**](https://themewagon.com/themes/picto/), de
  ThemeWagon — una plantilla gratuita de una sola página (*one-page*) hecha
  con Tailwind CSS, con demo original en
  [themewagon.github.io/picto](https://themewagon.github.io/picto/).
- **Framework de JavaScript:** ninguno en mi portafolio. Toda la
  interactividad (`js/portafolio.js`) está escrita en JavaScript vanilla.
  (La plantilla original sí usa React con Vite; ver la sección
  [Plantilla base original](#plantilla-base-original-picto)).

### Menú y secciones

| Sección          | Qué muestra |
|-------------------|-------------|
| **Inicio**         | Presentación principal: nombre, foto, una frase que resume mi doble enfoque (interfaces y bases de datos), etiquetas rápidas (SQL, NoSQL, Modelado de datos, Optimización), botones hacia "Proyectos" y "Contacto", y enlaces a redes. |
| **Sobre mí**        | Dos párrafos: uno sobre cómo entiendo el diseño de interfaces y otro sobre mi interés en bases de datos (modelos entidad-relación, normalización, consultas SQL e índices), más tres tarjetas cortas (enfoque, en qué estoy trabajando ahora, y mi meta). |
| **Habilidades**     | Tres columnas —Diseño, Desarrollo y Bases de datos— con las herramientas que uso, cada una etiquetada honestamente como "Cómodo", "Aprendiendo" o "Explorando". |
| **Proyectos**       | Seis proyectos propios (en progreso o planeados) con imagen, estado, descripción corta y las herramientas usadas: tres de diseño/desarrollo web y tres de bases de datos (modelo relacional de un inventario, optimización de consultas y catálogo NoSQL). |
| **Contacto**        | Datos de contacto directos y un formulario (nombre, correo, mensaje) validado con JavaScript. |

---

## Proceso de creación

1. **Elegí Picto como plantilla base** porque es de una sola página,
   minimalista, y está hecha con Tailwind CSS — encajaba bien con un
   portafolio de diseño UI/UX sin necesitar múltiples páginas.
2. **Descargué y ejecuté la plantilla original** (`npm install` y
   `npm run dev`) para estudiar su estructura y su diseño. La versión
   descargada es un proyecto de **React + Vite + daisyUI**, y la actividad
   no permite frameworks de JavaScript como React. Por eso **reconstruí su
   diseño en HTML, CSS y JavaScript vanilla**, usando solo clases de
   Tailwind CSS por CDN, sin paso de build. Conservé su misma idea de
   estructura (nav fija, hero de dos columnas, secciones con separadores,
   footer). La copia original quedó en `plantilla-base/` como referencia.
3. **Adapté el contenido a mi perfil:** reemplacé todo el texto genérico
   por mi nombre, mi enfoque (diseño de interfaces + bases de datos) y una
   bio corta y real sobre por qué me interesan el diseño y los datos.
4. **En "Habilidades" evité inflar mi experiencia.** En vez de barras de
   porcentaje inventadas, usé etiquetas honestas ("Cómodo", "Aprendiendo",
   "Explorando") que reflejan en qué nivel estoy realmente en cada
   herramienta. Agregué una tercera columna, **Bases de datos**, con SQL,
   modelado entidad-relación y normalización, NoSQL (MongoDB), índices y
   optimización de consultas, y transacciones y respaldos.
5. **En "Proyectos"**, como todavía no tengo proyectos reales terminados
   que mostrar, incluí seis que estoy planeando o desarrollando como
   ejercicio personal, marcados con su estado ("Planeado", "En progreso"),
   en lugar de dejar la sección vacía. Sumé tres enfocados en bases de
   datos y creé sus ilustraciones en SVG con la misma paleta del sitio.
6. **Agregué `css/portafolio.css`** solo para lo que Tailwind no resuelve
   con clases utilitarias: la tipografía importada de Google Fonts, la
   animación de aparición al hacer scroll, y el subrayado del enlace activo
   del menú.
7. **Escribí `js/portafolio.js`** para: abrir/cerrar el menú en móvil,
   resaltar en el menú la sección que se está viendo, animar la aparición
   de cada sección al hacer scroll, mostrar un botón de "volver arriba", y
   validar el formulario de contacto (es una demostración visual, no envía
   correos reales porque no hay backend).
8. **Foto de perfil real:** usé una fotografía propia (`img/20260929_093126.jpg`)
   en la sección de inicio, con texto alternativo descriptivo.

---

## Plantilla base original (Picto)

La plantilla original se incluye sin modificar en la carpeta
`plantilla-base/` como referencia. **No es la que se publica**: GitHub
Pages muestra el `index.html` de la raíz, que es mi portafolio en HTML, CSS
y JS vanilla.

- **Descarga:** <https://themewagon.com/themes/picto/>
- **Demo original:** <https://themewagon.github.io/picto/>
- **Tecnologías de la plantilla:** React, Vite, Tailwind CSS y daisyUI.

Para ejecutarla en local (requiere [Node.js](https://nodejs.org/)):

```bash
cd plantilla-base
npm install
npm run dev
```

Luego abrir `http://localhost:5173/picto/` en el navegador.

> `npm install` muestra avisos de vulnerabilidades y paquetes obsoletos.
> Son dependencias de desarrollo de la plantilla y no afectan a mi
> portafolio, que no usa npm. No es necesario ejecutar `npm audit fix --force`.

---

## Estructura del repositorio

```
/portafolio
├── README.md
├── index.html
├── .gitignore
├── plantilla-base/          (plantilla Picto original, solo referencia)
├── css/
│   └── portafolio.css
├── js/
│   └── portafolio.js
└── img/
    ├── 20260929_093126.jpg      (foto de perfil)
    ├── proyecto-finanzas.svg
    ├── proyecto-sistema-diseno.svg
    ├── proyecto-landing-evento.svg
    ├── proyecto-modelo-relacional.svg
    ├── proyecto-optimizacion-consultas.svg
    ├── proyecto-nosql-catalogo.svg
    ├── captura-inicio.png
    ├── captura-sobre-mi.png
    ├── captura-habilidades.png
    ├── captura-proyectos.png
    └── captura-contacto.png
```

---

## Capturas de pantalla

Portafolio funcionando en el navegador.

**Inicio**

![Sección de inicio del portafolio](img/Captura%20de%20pantalla%202026-09-30%20114301.png)

**Sobre mí**

![Sección sobre mí](img/Captura%20de%20pantalla%202026-09-30%20114314.png)

**Habilidades** (Diseño, Desarrollo y Bases de datos)

![Sección de habilidades](img/Captura%20de%20pantalla%202026-09-30%20114324.png)

**Proyectos** (diseño y bases de datos)

![Sección de proyectos](img/Captura%20de%20pantalla%202026-09-30%20114408.png)

**Contacto**

![Sección de contacto y formulario](img/Captura%20de%20pantalla%202026-09-30%20114416.png)

---

## Pendiente antes de entregar


# Actividad4
