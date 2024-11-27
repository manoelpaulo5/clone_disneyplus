document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            const button = document.querySelector(`[data-tab-button=${abaAlvo}]`);
            removeSubLine();
            button.classList.add('shows__tab__button--is-active')
        })
    }
})

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

function removeSubLine() {
    const navSubLine = document.querySelectorAll('[data-tab-button');

    for (let i = 0; i < navSubLine.length; i++) {
        navSubLine[i].classList.remove('shows__tab__button--is-active');
    }
}