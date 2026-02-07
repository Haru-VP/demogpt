# 🌌 AstroGPT — CV & Portfolio Demo

AstroGPT es un sitio web tipo **CV / portafolio personal** construido con **Astro**, enfocado en una experiencia visual limpia, moderna y completamente responsive.  
Funciona como un **demo editable**, ideal para presentar perfil profesional, experiencia y habilidades de forma clara y visualmente cuidada.

---

## ✨ Características

### 🧭 Página principal
- Encabezado claro con nombre y navegación.
- Sección central con información del CV.
- Secciones adicionales estilizadas.
- Pie de página minimalista.

### 🎨 Diseño visual
- Tipografía personalizada.
- Microinteracciones sutiles.
- Componente visual de **humo / ambiente** que aporta profundidad sin distraer.

### 🔄 Contenido dinámico
- Toda la información del CV se gestiona desde:
```

src/cv.json

```
- Permite editar el contenido sin modificar las plantillas del sitio.

---

## 🛠️ Tecnologías

- **Framework:** Astro
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS + CSS global
- **Build / Dev:** Vite + esbuild
- **Componentes:** Archivos `.astro` reutilizables
- **Assets:** Fuentes e imágenes en `public/` y `src/assets/`

---

## 🧩 Estructura del proyecto
````
demogpt/
├── astro.config.mjs
├── package.json
├── README.md
├── public/
│   └── font/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Content.astro
│   │   ├── Humo.astro
│   │   └── OtraSection.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   └── global.css
│   └── cv.json

````
## ▶️ Ejecución local

1. Clona el repositorio y entra al proyecto:
   ```bash
   git clone <url-del-repositorio>
   cd demogpt


2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Ejecuta el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Construye y previsualiza el sitio:

   ```bash
   npm run build
   npm run preview
   ```

## 🚀 Roadmap / Mejoras futuras

* SEO y metadatos dinámicos (Open Graph).
* Accesibilidad (a11y): contraste, ARIA y navegación por teclado.
* Optimización de performance (imágenes y lazy-loading).
* Internacionalización (es / en).
* Integración con CMS (Netlify CMS, Contentful).
* CI/CD con GitHub Actions.
* Tests y validación de datos (`cv.json`).
* Toggle light/dark.
* Modo impresión para CV.
* Formulario de contacto.

---

## 🤝 Contribuir

Las contribuciones son bienvenidas.

* Abre un **issue** para proponer mejoras o reportar errores.
* Envía **Pull Requests** con cambios claros y commits descriptivos.
* Respeta la estructura y estilo del proyecto.

---

## 📫 Contacto

Este proyecto puede utilizarse como base para un CV o portafolio personal.
Si tienes sugerencias o feedback, abre un issue en el repositorio.

