let container = document.querySelector("#container");
let newDiv = document.querySelector("#newdiv");
let startX = startY = currentX = currentY = 0;
let clear = 0;

let render = () => {
    clear = requestAnimationFrame(render);
    if (currentX - startX >= 0 && currentY - startY >= 0) {
        //右下
        newDiv.style.top = `${startY}px`;
        newDiv.style.left = `${startX}px`;
    } else if (currentX - startX <= 0 && currentY - startY <= 0) {
        //左上
        newDiv.style.top = `${currentY}px`;
        newDiv.style.left = `${currentX}px`;
    } else if (currentX - startX < 0 && currentY - startY > 0) {
        //左下
        newDiv.style.top = `${startY}px`;
        newDiv.style.left = `${currentX}px`;
    } else {
        //右上
        newDiv.style.top = `${currentY}px`;
        newDiv.style.left = `${startX}px`;
    }
    newDiv.style.width = `${Math.abs(currentX - startX)}px`;
    newDiv.style.height = `${Math.abs(currentY - startY)}px`;
    newDiv.style.backgroundColor = "rgba(25,150,240)";
};

container.addEventListener("mousedown", (event) => {
    newDiv.style.display = "block";
    startX = event.clientX;
    startY = event.clientY;
    render();
});

container.addEventListener("mousemove", (event) => {
    currentX = event.clientX;
    currentY = event.clientY;
});

container.addEventListener("mouseup", () => {
    cancelAnimationFrame(clear);
    newDiv.style.display = "none";
});