var now = new Date()

var time = now.getHours

console.log(`It's ${now} hours.`)
if (time > 0 && time < 12){
    console.log(`Morning!`)
} else if (time > 12 && time < 18) {
    console.log(`Afternoon`)
} else {
    console.log(`Night`)
}