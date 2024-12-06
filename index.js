// myh1 = document.getElementById("myh1");
// startbtn =  document.getElementById("startbtn");
// pausebtn  =  document.getElementById("pausebtn");
// resetbtn =  document.getElementById("resetbtn");
//we dont use like this because , already when onclick event 
//we gave a fuction  called reset()....
// resetbtn.onclick = function() {
//     display.textContent = "00:00:00:00";
// }

display = document.getElementById("display");
let timer =  null;
let startTime = 0;
let endedtime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - endedtime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
    
}

function stop() { 
    if(isRunning) {
        clearInterval(timer);
        endedtime = Date.now() - startTime;
        isRunning = false; 
    }

}

function reset() {
    display.textContent = "00:00:00:00";
    isRunning = false;
    clearInterval(timer);
    endedtime = 0;
    startTime = 0;

}

function update() {
    const currentTime = Date.now();
    const endedtime = currentTime - startTime; 

    let hrs = String(Math.floor(endedtime / (1000 * 60 * 60))).padStart(2, "0");
    let mins = String(Math.floor((endedtime / (1000 * 60)) % 60)).padStart(2, "0");
    let secs = String(Math.floor((endedtime / 1000) % 60)).padStart(2, "0");
    let msecs = String(Math.floor((endedtime % 1000) / 10)).padStart(2, "0");

    display.textContent = `${hrs}:${mins}:${secs}:${msecs}`;
}

