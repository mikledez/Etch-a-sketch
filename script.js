function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function clearGrid(box) {

    box.forEach((div) => {
        div.style.backgroundColor = 'white';
    });
    box.style.backgroundColor = 'white';
}

//declarations
let newSize = 10;
document.documentElement.style.setProperty('--size', `${newSize}`);

const clearBtn = document.getElementById("clearBtn");


//------------------


//Load Grid Size block
for (i = 0; i < newSize * newSize; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "innerBox";

    const parent = document.getElementById("container");
    parent.appendChild(newDiv);
    console.log(i + 1);
}
//------------------

const box = document.querySelectorAll('.innerBox');
//Color box block
box.forEach((div) => {
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = getRandomColor();
    });
});
//-------------------


//clear Grid block
clearBtn.addEventListener('click', function () {
    clearGrid(box);
});
//------