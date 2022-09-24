// const info = {
//     name: "Trick",
//     age: 18,
//     country: "Philippines"
// }

// function logData() {
//     const messageTemplate = `${info.name} is ${info.age} and lives in ${info.country}`
//     console.log(messageTemplate)
// }

// logData()

// function ageDiscount(age) {
//     let discount = `No Discount`
//     if (age < 6) {
//         discount = `Free`
//     }
//     else if (age < 17) {
//         discount = `Child Discount`
//     }
//     else if (age < 26) {
//         discount = `Student Discount`
//     }
//     else if (age < 66) {
//         discount = `Full Price`
//     }
//     else {
//         discount = `Senior Citizen Discount`
//     }
//     return discount
// }

// console.log(ageDiscount(info.age))

// let largeCountriesOL = [ `Tuvalu`, `India`, `USA`, `Indonesia`, `Monaco` ]
// // Change to [ `China`, `India`, `USA`, `Indonesia`, `Pakistan` ] and list out the items

// largeCountriesOL.shift()
// largeCountriesOL.unshift(`China`)
// largeCountriesOL.pop()
// largeCountriesOL.push(`Monaco`)

// console.log(largeCountriesOL)

// for ( i = 0; i < largeCountriesOL.length; i++ ) {
//     console.log(largeCountriesOL[i])
// }

// const currentDate = {
//     weekday: `Friday`,
//     day: `13`,
//     month: `October`,
//     year: `Unknown`
// }

// function isFriday13() {
//     if (currentDate.weekday === `Friday` && currentDate.day === `13`) {
//         console.log(`What a spooky day!`)
//     }
//     else {
//         console.log(`Lovely day isn't it?`)
//     }
// }

// isFriday13()

// const hands = [ `rock`, `paper`, `scissors`]

// function randomHand() {
//     const rng = Math.floor( Math.random() * 3 )
//     console.log(hands[rng])
// }

// randomHand()

// // let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

// // let stageEl = document.getElementById("stage")
// // let fightButton = document.getElementById("fightButton")

// // fightButton.addEventListener("click", function() {
// //     function getRNG() {
// //         const rng = Math.floor( Math.random() * fighters.length )
// //         return rng
// //     }
// //     stageEl.textContent = `${fighters[getRNG()]} vs ${fighters[getRNG()]}`
// // })

// let fruit = [ "🍎", "🍊", "🍎", "🍎", "🍊" ]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")

// function sortFruit() {
// for ( i = 0; i < fruit.length; i++ ) {
//     if (fruit[i] === "🍎") {
//         appleShelf.textContent += "🍎"         
//     }
//     else if (fruit[i] === "🍊") {
//         orangeShelf.textContent += "🍊"
//     }
// }
// }

// sortFruit()