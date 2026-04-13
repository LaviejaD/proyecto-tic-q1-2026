# InfoSeguro - Sitio Web Educativo sobre Seguridad de la Información y Ética Digital

Proyecto final para la asignatura **Tecnología de la Información y Comunicación I (Q 2026)**.  
El sitio web promueve la seguridad de la información y el uso responsable de la tecnología, aplicando principios de ética digital, diseño web responsivo y organización de contenidos.

## 🚀 Características

- **Contenido completo** sobre seguridad informática, tipos de amenazas, ataques reales y medidas de protección.
- **Ética digital**: principios, derechos de autor, huella digital y desafíos actuales.
- **Buenas prácticas** para proteger datos personales, uso seguro de redes sociales y consejos para estudiantes.
- **Casos prácticos** reales: Colonial Pipeline, Equifax, sesgo en IA, estafas con deepfake de voz.
- **Recursos multimedia**: videos, infografías, enlaces de interés y juegos didácticos.
- **Formulario de contacto** integrado con Microsoft Forms.
- **Diseño moderno** con TailwindCSS, completamente responsivo y accesible.
- **Código abierto** – disponible en GitHub.

## 🛠️ Tecnologías utilizadas

- [Prect](https://preactjs.com/) -con componentes funcionales 
- [Vite](https://vitejs.dev/) – empaquetador rápido
- [TailwindCSS](https://tailwindcss.com/) – estilos utilitarios
- [TypeScript](https://www.typescriptlang.org/) (opcional, según implementación)
- Íconos SVG personalizados

## 📋 Requisitos previos

- [Node.js](https://nodejs.org/) **versión 20 o superior** (última versión LTS recomendada)
- npm o yarn

## 🔧 Instalación y ejecución en local

Sigue estos pasos para levantar el proyecto en tu máquina:

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/LaviejaD/proyecto-tic-q1-2026.git
   cd proyecto-tic-q1-2026
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o si usas yarn
   yarn install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abrir en el navegador**  
   El servidor se iniciará en `http://localhost:/proyecto-tic-q1-2026/` .

## 📦 Construcción para producción

Para generar los archivos estáticos optimizados:

```bash
npm run build
# o
yarn build
```

Los archivos se guardarán en la carpeta `dist/`. Puedes servirlos con cualquier servidor web estático.

## 🌐 Estructura del proyecto

```
src/
├── components/
│   ├── Footer.tsx
│   └── Navegation.tsx
├── pages/
│   ├── SeguridadInformacion.tsx
│   ├── EticaDigital.tsx
│   ├── BuenasPracticas.tsx
│   ├── CasosPracticos.tsx
│   ├── Recursos.tsx
│   ├── Contactame.tsx
├── App.tsx
├── main.tsx
└── index.css (con directivas de Tailwind)
```

## 📄 Licencia

Este proyecto es de código abierto y se comparte con fines educativos.  
Puedes usarlo, modificarlo y distribuirlo libremente.

---
Hecho con ❤️ para un mundo digital más seguro y ético.

