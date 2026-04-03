function getRandomColor() {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function clearGrid() {

    const box = document.querySelectorAll('.innerBox');

    box.forEach((div) => {
        div.style.backgroundColor = 'white';
        div.dataset.opacity = 0;
    });
}

function loadGrid(size) {
    const container = document.getElementById("container");

    container.innerHTML = "";

    document.documentElement.style.setProperty('--size', size);

    for (let i = 0; i < size * size; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = "innerBox";
        newDiv.dataset.opacity = 0;

        newDiv.addEventListener('mouseover', () => {
            if (!isDrawing) return;

            if (mode === "random") {
                newDiv.style.backgroundColor = getRandomColor();
            }

            if (mode === "black") {
                let currentOpacity = Number(newDiv.dataset.opacity);

                if (currentOpacity < 1) {
                    currentOpacity += 0.1;
                }

                newDiv.dataset.opacity = currentOpacity;
                newDiv.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity})`;
            }
        });

        newDiv.addEventListener('mousedown', () => {
            if (mode === "random") {
                newDiv.style.backgroundColor = getRandomColor();
            }

            if (mode === "black") {
                let currentOpacity = Number(newDiv.dataset.opacity);

                if (currentOpacity < 1) {
                    currentOpacity += 0.1;
                }

                newDiv.dataset.opacity = currentOpacity;
                newDiv.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity})`;
            }
        });

        container.appendChild(newDiv);
    }
}

//declarations 
let isDrawing = false;

let mode = "random";

const clearBtn = document.getElementById("clearBtn");
const randomBtn = document.getElementById("randomBtn");
const blackBtn = document.getElementById("blackBtn");
const slider = document.getElementById("sizeSlider");

//-------------------------------

window.addEventListener('mousedown', () => {
    isDrawing = true;
});

window.addEventListener('mouseup', () => {
    isDrawing = false;
});

let size = 16;
document.documentElement.style.setProperty('--size', `${size}`);
loadGrid(size);


slider.addEventListener('input', () => {
    size = slider.value;
    document.getElementById("boxSize").textContent = size + "x" + size;
    loadGrid(size);
});


//clear Grid block
clearBtn.addEventListener('click', function () {
    clearGrid();
});

randomBtn.addEventListener('click', function () {
    mode = "random";
});
blackBtn.addEventListener('click', function () {
    mode = "black"
});
