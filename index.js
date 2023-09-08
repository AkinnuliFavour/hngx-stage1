const currentDay = document.querySelector('.current-day')
const currentTime = document.querySelector('.current-time')

console.log(currentDay)


const dayArray = ['Suday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const date = new Date()

console.log(date.getDay())
console.log(date.getUTCMilliseconds())

currentDay.textContent = `Current Day of the Week: ${dayArray[date.getDay()]}`
currentTime.textContent = `Current UTC Time: ${date.getUTCMilliseconds()}`
