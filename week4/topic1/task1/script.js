let clock = document.getElementById('clock');

function updateTime() {
    let time = new Date();
    clock.innerText = time.toLocaleTimeString();
}

setInterval(updateTime, 1000);