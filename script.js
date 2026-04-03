function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}



let newSize = 10;
document.documentElement.style.setProperty('--size', `${newSize}`);


for (i = 0; i < newSize * newSize; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "innerBox";

    const parent = document.getElementById("container");
    parent.appendChild(newDiv);
    console.log(i + 1);
}

const box = document.querySelectorAll('.innerBox');

box.forEach((div, index) => {
    console.log(`Div index: ${index}`, div);

    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = getRandomColor();
    });
});
