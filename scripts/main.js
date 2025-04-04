let blenderState = 0;
const blender = document.getElementById("blender");
const blenderSound = document.getElementById("blender-sound");
const blenderButtonSound = document.getElementById("blender-button-sound");
const blenderButton = document.getElementById("blender-button");

function blenderController() {
    if (blenderState === 0) {
        blenderState = 1;
        blenderSoundController();
        blender.classList.add("active");
    } else {
        blenderSoundController();
        blenderState = 0;
        blender.classList.remove("active");
    }
}

function blenderSoundController() {
    if(blenderSound.paused) {
        blenderButtonSound.play();
        blenderSound.play();
    }
    else {
        blenderButtonSound.play();
        blenderSound.pause();
        blenderSound.currentTime = 0;
    }
}