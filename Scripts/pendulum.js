const lengthSlider = document.getElementById('length');
const angleSlider = document.getElementById('angle');
const lengthDisplay = document.getElementById('length-display');
const angleDisplay = document.getElementById('angle-display');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const rod = document.getElementById('rod');
const weight = document.getElementById('weight');

const pivotX = 100;
const pivotY = 25;
let length = 50;
let startAngle = 30;
let currentAngle = 30;
let angularVelocity = 0;
let isRunning = false;

// Gravity constant (simplified for animation)
const gravity = 0.5;
const damping = 0.995;

// Slider Updates
lengthSlider.addEventListener('input', (e) => {
    length = parseInt(e.target.value);
    lengthDisplay.textContent = length + ' cm';
    if (!isRunning) {
        updatePendulum();
    }
});

angleSlider.addEventListener('input', (e) => {
    startAngle = parseInt(e.target.value);
    angleDisplay.textContent = startAngle + '°';
    if (!isRunning) {
        currentAngle = startAngle;
        angularVelocity = 0;
        updatePendulum();
    }
});

startBtn.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        startBtn.textContent = '⏸ Pause';
        animate();
    } else {
        isRunning = false;
        startBtn.textContent = '▶ Start';
    }
});

resetBtn.addEventListener('click', () => {
    isRunning = false;
    startBtn.textContent = '▶ Start';
    currentAngle = startAngle;
    angularVelocity = 0;
    updatePendulum();
});

// Calculating pendulum position and drawing
function updatePendulum() {
    const angleRad = (currentAngle * Math.PI) / 180;
    const x = pivotX + length * Math.sin(angleRad);
    const y = pivotY + length * Math.cos(angleRad);

    rod.setAttribute('x2', x);
    rod.setAttribute('y2', y);
    weight.setAttribute('cx', x);
    weight.setAttribute('cy', y);
}

function animate() {
    if (!isRunning) return;

    // Pendulum-formula: angular acceleration = -(g/L) * sin(angle)
    const angleRad = (currentAngle * Math.PI) / 180;
    const angularAcceleration = (-gravity / length) * Math.sin(angleRad) * 100;

    angularVelocity += angularAcceleration;
    angularVelocity *= damping;
    currentAngle += angularVelocity;

    updatePendulum();
    requestAnimationFrame(animate);
}

updatePendulum();