# 🚀 Entrega 2 | Navega las Rutas - E-commerce de Tecnología

## 🌟 Descripción del Proyecto
Este proyecto corresponde a la **Segunda Entrega** del curso de React JS de Coderhouse. El objetivo principal fue implementar la funcionalidad de navegación completa utilizando `react-router-dom`, simulando las peticiones a una API y estructurando los componentes bajo el patrón contenedor/presentacional.

---

## 🎯 Requisitos de la Entrega (Checklist Cumplido)

Se han completado todos los puntos solicitados por la consigna "Navega las Rutas":

* ✅ **React Router:** Implementación completa para la navegación.
* ✅ **Rutas Dinámicas:** Configuración de rutas parametrizadas:
    * `/:` (Catálogo Principal)
    * `/category/:categoryId` (Catálogo Filtrado)
    * `/item/:itemId` (Detalle del Producto)
* ✅ **Promesas Asíncronas:** Se utiliza `asyncMock.js` con `Promises` y `setTimeout` para simular la latencia de red.
* ✅ **Arquitectura de Componentes:** División correcta entre Contenedores (`ItemListContainer`, `ItemDetailContainer`) y Presentacionales.
* ✅ **Hooks Esenciales:** Uso de `useState`, `useEffect` y `useParams`.
* ✅ **Renderizado:** Uso del método `Array.map()` y la prop `key` para listar los productos.
* ✅ **Ruta 404:** Implementación de la ruta comodín (`path='*'`).

---

## 🛠️ Tecnologías Utilizadas

* **Framework:** React JS
* **Bundler:** Vite
* **Librería Principal:** `react-router-dom`
* **Estilizado:** CSS Puro

---

## ⚙️ Instalación y Puesta en Marcha

Para ejecutar el proyecto en tu máquina local, sigue los siguientes pasos en la terminal:

1.  **Clonar el repositorio:**
    ```bash
    gh repo clone Eze9914/Reactjs-Villalba
    ```

2.  **Navegar al directorio del proyecto:**
    ```bash
    cd [Villalba-reactjs]
    ```

3.  **Instalar todas las dependencias:**
    ```bash
    npm install
    ```

4.  **Ejecutar la aplicación en modo desarrollo:**
    ```bash
    npm run dev
    ```

El proyecto se abrirá automáticamente en tu navegador en `http://localhost:5173/` (o un puerto similar).

---

## 🧑‍💻 Autor
* **Estudiante:** [Ezequiel Villalba]
* **Curso:** React JS
* **Coderhouse**
