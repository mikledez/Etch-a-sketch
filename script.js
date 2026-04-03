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
    });
}

function loadGrid(size) {
    const container = document.getElementById("container");

    container.innerHTML = "";

    document.documentElement.style.setProperty('--size', size);

    for (i = 0; i < size * size; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = "innerBox";

        newDiv.addEventListener('mouseenter', () => {
            newDiv.style.backgroundColor = getRandomColor();
        });
        container.appendChild(newDiv);
    }
}

//declarations
let size = 16;
document.documentElement.style.setProperty('--size', `${size}`);
loadGrid(size);

const clearBtn = document.getElementById("clearBtn");
const slider = document.getElementById("sizeSlider");


slider.addEventListener('input', () => {
    size = slider.value;
    loadGrid(size);
});


//clear Grid block
clearBtn.addEventListener('click', function () {
    clearGrid();
});
//-----------