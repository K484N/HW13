const images = Array.from(document.querySelectorAll("img"));
const stopButton = document.querySelector(".stop-button");
const buttonStart = document.querySelector(".start-button");
let timerDiv = document.querySelector(".timer");
let imageSwap = images.length - 1;
let duration = 3000;

function imageCycle() {
    let startTime = Date.now();
    let timeCountdown = setTimeout(function change() {
        let timePassed = duration - Math.round(Date.now() - startTime);
        timerDiv.innerHTML = (timePassed / 1000).toFixed(2);
        timeCountdown = setTimeout(change, 100);
    }, 100);

    let timer = setTimeout(function changeImage() {
        images[imageSwap].style.opacity = "0";
        imageSwap--;
        startTime = Date.now();
        if (imageSwap < 0) {
            images.forEach((element) => {
                element.style.opacity = "1";
            });
            imageSwap = images.length - 1;
        }

        timer = setTimeout(changeImage, duration);
    }, duration);

    stopButton.addEventListener("click", () => {
        clearInterval(timer);
        clearInterval(timeCountdown);
    });
}

buttonStart.addEventListener("click", imageCycle);