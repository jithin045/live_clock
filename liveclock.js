
getTimeData = () => {
    let localtime = new Date()
    console.log(localtime)
    let hours = localtime.getHours()
    let minutes = localtime.getMinutes()
    let seconds = localtime.getSeconds()
    console.log(hours, minutes, seconds)
    let timestring = hours >= 12 ? `${hours - 12} : ${minutes} : ${seconds} PM` : `${hours}:${minutes}:${seconds} AM`
    time.textContent = timestring

    setTimeout(() => {
        getTimeData()
    }, 1000)
}

getTimeData()

//callback: its a function that is executed after execution of another function