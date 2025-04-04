export function PrincipHeader() {
    const inicio = document.createElement('header');
    inicio.classList.add('barra');

    const titulo = document.createElement('h1');
    titulo.textContent = 'Examen Final';

    inicio.appendChild(titulo);

    return inicio;
}
