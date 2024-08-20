let toggleButton = document.getElementById('toggle-button');
let textElement = document.getElementById('text');
let containerElement = document.querySelector('.container');
let isToggled = false;

toggleButton.addEventListener('click', () => {
    if (!isToggled) {
        toggleButton.textContent = 'Back';
        textElement.innerHTML = 'CodeChef: <span style="text-decoration: underline; color: blue;">https://www.codechef.com/users/dineshkunta</span>';
        
        containerElement.classList.add('toggled');
    } else {
        toggleButton.textContent = 'View';
        textElement.textContent = 'Coding profile';
        containerElement.classList.remove('toggled');
    }
    isToggled = !isToggled;
});