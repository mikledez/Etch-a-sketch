let newSize = 8;
document.documentElement.style.setProperty('--size', `${newSize}`);


for (i = 0; i < newSize * newSize; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "innerBox";

    const parent = document.getElementById("container");
    parent.appendChild(newDiv);
    console.log(i + 1);
}
