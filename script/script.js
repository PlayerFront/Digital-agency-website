const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);


document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});


document.querySelectorAll('a, button, input, [data-hover]').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
});


for (let i = 0; i < 5; i++) {
    const particle = document.createElement('div');
    particle.classList.add('cursor-particle');
    document.body.appendChild(particle);
}

const particles = document.querySelectorAll('.cursor-particle');
document.addEventListener('mousemove', (e) => {
    particles.forEach((part, index) => {
        setTimeout(() => {
            part.style.left = `${e.clientX}px`;
            part.style.top = `${e.clientY}px`;
            part.style.opacity = 1 - index * 0.2;
        }, index * 50);
    });
});