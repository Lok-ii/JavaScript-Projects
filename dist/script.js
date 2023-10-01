document.addEventListener("mousemove", (event) => {
    let x = document.getElementById("xPosition");
    x.innerHTML = event.clientX;
    let y = document.getElementById("yPosition");
    y.innerHTML = event.clientY;
});
