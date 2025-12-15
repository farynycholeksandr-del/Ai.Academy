document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIconImg = document.getElementById('theme-icon-img');
    const html = document.documentElement;

    const ICON_MOON = 'assets/half-moon.png';
    const ICON_SUN = 'assets/sun.png';

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIconImg.src = ICON_SUN;
            themeIconImg.alt = 'Світла тема';
        } else {
            themeIconImg.src = ICON_MOON;
            themeIconImg.alt = 'Темна тема';
        }
    }

    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let currentTheme = localStorage.getItem('theme');

    if (!currentTheme) {
        currentTheme = prefersDark ? 'dark' : 'light';
    }

    html.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', () => {
        const newTheme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });


    const modal = document.getElementById('auth-modal');
    const loginRegisterBtn = document.getElementById('login-register-btn');
    const closeBtn = document.querySelector('.close-btn');

    const tabLogin = document.getElementById('tab-login');
    const tabRegister = document.getElementById('tab-register');
    const formLogin = document.getElementById('login-form');
    const formRegister = document.getElementById('register-form');

    function openModal(tab = 'login') {
        modal.style.display = 'block';
        if (tab === 'login') {
            switchTab(tabLogin, formLogin);
        } else {
            switchTab(tabRegister, formRegister);
        }

        document.body.style.overflow = 'hidden'; 
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; 
    }

    function switchTab(clickedTab, clickedForm) {
        tabLogin.classList.remove('active');
        tabRegister.classList.remove('active');
        formLogin.classList.remove('active-form');
        formRegister.classList.remove('active-form');

        clickedTab.classList.add('active');
        clickedForm.classList.add('active-form');
    }

    loginRegisterBtn.addEventListener('click', () => openModal('login'));

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    tabLogin.addEventListener('click', () => switchTab(tabLogin, formLogin));
    tabRegister.addEventListener('click', () => switchTab(tabRegister, formRegister));
 
    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Вхід виконано! (Демо-режим)');
        closeModal();
    });

    formRegister.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Реєстрація виконана! (Демо-режим)');
        closeModal();
    });
});