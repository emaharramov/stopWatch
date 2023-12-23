let start_btn = document.getElementById("start_btn")
let stop_btn = document.getElementById("stop_btn")
let reset_btn = document.getElementById("reset_btn")
let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let second = document.getElementById("second")

let hours = 0
let minutes = 0
let seconds = 0
let started = false
let stopwatchs;

start_btn.onclick = function startTimer(){
    if(started === false){
        started=true
        stopwatchs = setInterval(() => {
            seconds++
            if(seconds === 60){
                seconds = 0
                minutes++
                if(minutes == 60){
                    minutes =0
                    hours++
                    if(hours < 10){
                        hour.innerHTML = "0" + hours
                    }else {
                        hour.innerHTML = hours
                    }
                }
                if(minutes < 10){
                    minute.innerHTML = "0" + minutes
                }else {
                    minute.innerHTML =  minutes
                }
            }
            if(second<10){
                second.innerHTML = "0" + seconds
            }else {
                second.innerHTML = seconds
            }
        }, 0.0001);
    }
    start_btn.innerHTML = 'Started'
    stop_btn.innerHTML = "Stop"
}

stop_btn.onclick = function stopTimer(){

    clearInterval(stopwatchs)
    started = false

    start_btn.innerHTML = 'Continue'
    stop_btn.innerHTML = "Stopped"
}

reset_btn.onclick = function finishTimer(){

    clearInterval(stopwatchs)

    hours = 0
    minutes = 0
    seconds = 0

    second.innerHTML = '00'
    minute.innerHTML = '00'
    hour.innerHTML = '00'

    start_btn.innerHTML = 'Start'
    stop_btn.innerHTML = "Stop"
}