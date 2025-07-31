// Seleciona os elementos do DOM necessários para o menu
const menuButton = document.getElementById('menu-button');
const closeMenuButton = document.getElementById('close-menu-button');
const mainNav = document.getElementById('main-nav');
const menuOverlay = document.getElementById('menu-overlay');

// Função para abrir o menu deslizante
function openMenu() {
    mainNav.classList.remove('translate-x-full'); // Remove a classe que esconde o menu
    mainNav.classList.add('translate-x-0');    // Adiciona a classe que o mostra
    menuOverlay.classList.remove('hidden');     // Mostra o overlay de fundo
}

// Função para fechar o menu deslizante
function closeMenu() {
    mainNav.classList.remove('translate-x-0');    // Remove a classe que o mostra
    mainNav.classList.add('translate-x-full');    // Adiciona a classe que o esconde
    menuOverlay.classList.add('hidden');        // Esconde o overlay de fundo
    // Garante que todos os submenus abertos sejam fechados ao fechar o menu principal
    document.querySelectorAll('.submenu').forEach(submenu => {
        submenu.classList.add('hidden');
    });
}

// Adiciona listeners de evento para abrir e fechar o menu
menuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu); // Fecha o menu ao clicar no overlay

// Função para alternar a visibilidade de submenus
function toggleSubmenu(event) {
    event.preventDefault(); // Previne o comportamento padrão do link (navegação)
    // Encontra o submenu mais próximo dentro do item de lista clicado
    const submenu = event.target.closest('li').querySelector('.submenu');
    if (submenu) {
        submenu.classList.toggle('hidden'); // Alterna a classe 'hidden' para mostrar/esconder
    }
}

// Adiciona um listener para fechar o menu se a tecla 'Escape' for pressionada
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !mainNav.classList.contains('translate-x-full')) {
        closeMenu();
    }
});
