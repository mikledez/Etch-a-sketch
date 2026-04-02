let size = "16x16";


if (size == "16x16") {
    for (i = 0; i < 256; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = "innerBox";

        const parent = document.getElementById("container");
        parent.appendChild(newDiv);
        console.log(i + 1);
    }
}