# Tejer.Red - Gatsby

Este repositorio contiene la versión actual de [tejer.red](https://tejer.red), migrada de HTML estático a [Gatsby](https://www.gatsbyjs.com/), un generador de sitios estáticos basado en React.

## Estructura

- El código fuente está en la carpeta `src/`.
- Las páginas principales están en `src/pages/`.
- Los estilos globales y componentes se encuentran en `src/components/` y `src/styles/`.
- Se utiliza [React Helmet](https://github.com/nfl/react-helmet) para la gestión de metadatos y SEO.

## Desarrollo local

1. Asegúrate de tener [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm) y usa Node.js v20:

   ```bash
   nvm use 20
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el entorno de desarrollo:

   ```bash
   gatsby develop
   ```

4. Abre tu navegador en: [http://localhost:8000](http://localhost:8000)

## Exportar versión estática

Para generar los archivos estáticos listos para producción:

```bash
gatsby build
```

Los archivos exportados estarán en la carpeta `public/`.

---

## Notas y TODO

- El proyecto fue migrado de HTML estático a Gatsby para facilitar la escalabilidad y el mantenimiento.
- Se está trabajando en añadir páginas interiores por proyecto.
- Se utiliza React Helmet para mejorar el SEO.
- **TODO:** Añadir una versión sin JavaScript para mayor indexación y accesibilidad.

---

**Nota:**  
Una vez terminado de editar, solo es necesario subir los archivos generados en `public/` al servidor final: [https://tejer.red](https://tejer.red)
