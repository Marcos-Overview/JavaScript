var age = 12
console.log(`Your age is ${age}!`)

if(age < 16) {
    console.log(`You may not to vote!`)
} else if (age < 18 || age > 65){
    console.log(`You you can vote or not. It's up to you!`)
} else{
    console.log(`You must to vote!`)
}