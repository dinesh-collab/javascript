let score = 0;
let lastHole;
let timeUp = false;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];

    if (hole === lastHole) {
        return randomHole(holes);
    }

    lastHole = hole;
    return hole;
}

function peep() {
    const holes = document.querySelectorAll('.hole');
    const time = randomTime(500, 1000);
    const hole = randomHole(holes);

    hole.classList.add('up');

    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, time);
}

function startGame() {
    score = 0;
    document.getElementById('score').textContent = score;
    timeUp = false;
    peep();

    setTimeout(() => (timeUp = true), 10000);
}

function whack(event) {
    if (!event.isTrusted) return;
    
    score++;
    this.parentNode.classList.remove('up');
    document.getElementById('score').textContent = score;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.mole').forEach(mole => {
        mole.addEventListener('click', whack);
    });
});