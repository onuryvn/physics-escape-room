const lengthSlider = document.getElementById('length');
const angleSlider = document.getElementById('angle');
const lengthDisplay = document.getElementById('length-display');
const angleDisplay = document.getElementById('angle-display');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const rod = document.getElementById('rod');
const weight = document.getElementById('weight');

// Pendel-Parameter
const pivotX = 100;
const pivotY = 20;
let length = 50;
let startAngle = 30;
let currentAngle = 30;
let angularVelocity = 0;
let isRunning = false;

// Gravity constant (vereinfacht für Animation)
const gravity = 0.5;
const damping = 0.995; // Dämpfung

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

// Start Button
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

// Reset Button
resetBtn.addEventListener('click', () => {
    isRunning = false;
    startBtn.textContent = '▶ Start';
    currentAngle = startAngle;
    angularVelocity = 0;
    time = 0;
    updatePendulum();
});

// Pendel Position berechnen und zeichnen
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

    // Pendelgleichung: angular acceleration = -(g/L) * sin(angle)
    const angleRad = (currentAngle * Math.PI) / 180;
    const angularAcceleration = (-gravity / length) * Math.sin(angleRad) * 100;

    angularVelocity += angularAcceleration;
    angularVelocity *= damping;
    currentAngle += angularVelocity;

    updatePendulum();
    requestAnimationFrame(animate);
}

updatePendulum();