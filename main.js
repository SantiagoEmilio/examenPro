import { PrincipHeader } from './componentes/header/header.js';

const iniciarApp = () => {
    const app = document.querySelector("#root");

    const contenedor = document.createElement('div');
    contenedor.className = "principal";

    // Agregar el header
    const header = PrincipHeader();
    contenedor.appendChild(header);

    app.appendChild(contenedor);
}

// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', iniciarApp);
