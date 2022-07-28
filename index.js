const container = document.querySelector('.container');

for(let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.style.border = ('1px solid grey');
    div.classList.add('cell');
    container.appendChild(div);
}