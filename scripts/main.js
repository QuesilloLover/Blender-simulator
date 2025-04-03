let blenderState = 0;
const blender = document.getElementById("blender");
const blenderButton = document.getElementById("blender-button");

function blenderController() {
    if (blenderState === 0) {
        blenderState = 1;
        blender.classList.add("active");
    } else {
        blenderState = 0;
        blender.classList.remove("active");
    }
}