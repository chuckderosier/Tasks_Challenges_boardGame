$(function(){ // run jQuery first
    console.log("jQuery is working")
})
// create spaces with divs and classes
let createDivs
let createInDivs
let player1Dice = 1
let player1Points = 0
let player2Dice = 1
let player2Points = 0
let computerDice
let player1 = $(`.s0`).html(`<div class="play1"></div>`)
let player2  = $(`.s0`).html(`<div class="play2"></div>`)
for (let i = 0; i < 24; i++) { // outer loop
    let createDivs = document.createElement(`div`)
    $(createDivs).addClass(`s` + [i])
    $(`main`).append(createDivs)
}
for (let j = 0; j < 12; j++) { // inner loop
    let createInDivs = document.createElement(`div`)
    $(createInDivs).addClass(`is` + [j])
    $(`.inLoop`).append(createInDivs)
}
// roll to move
 // spaces pair values
spaces = {
    s0: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s1: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s2: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s3: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s4: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s5: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s6: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s7: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s8: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s9: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s10: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s11: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s12: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s13: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s14: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s15: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s16: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s17: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s18: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s19: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s20: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s21: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s22: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s23: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s24: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s25: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s26: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s27: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s28: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s29: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s30: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s31: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s32: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s33: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s34: {
        dice: 0,
        gainDice: 0,
        text: ``
    },
    s35: {
        dice: 0,
        gainDice: 0,
        text: ``
    }
}
// nav bar items
$('.rules').click(function() { // rules button
    alert("—- The Goal — Get to the center of the board first. To get there, you have to overcome Challenges to earn Points and accomplish Tasks to earn Die.n/— Start — Player with the next birthday goes first. Each player begins at Start. Each Die you earn gives you one die to roll for use in completing Tasks or overcoming Challenges, explained below.n/—- Movement —- On your turn, roll to move around the board. You can move clockwise or counter-clockwise. You only play the spot on which you land./n—- Task Spaces —- blue spaces are 1 die, purple spaces are 2 dice, orange spaces are 3 dice —- When you land on a Task space the app will roll that number of dice as indicated the space. You roll a number all of your dice you’ve earned. If you roll lower than the total rolled for the Task you earn 1 Die when in outer loop or 2 Dice  when in inner loop to use on your next Task or Challenge. Obviously the more you Dice the harder it will be to accomplish Tasks but the easier it will be to overcome challenges. Tie rolls are successes./n—- Challenge Spaces —- red spaces are 1 die, pink spaces are 2 dice, brown spaces are 3 dice —- When you land on a Challenge space the app will roll that number of dice as indicated the space. You roll a number all of your dice you’ve earned. If you roll higher than the total rolled for the Challenge you earn 1 Point when in outer loop or 2 points when in inner loop. When you get 4 Points you may advance to the inner loop from the green space on the outer loop. When you get to 8 points you may enter the center space from the green space on the inner loop. Exact roll not necessary. You win.")
}
)
// display players points and dice
$(".dicePlayer1").text("Player 1 has " + player1Dice + " dice")
$(".pointsPlayer1").text("Player 1 has " + player1Points + " points")
$(".dicePlayer2").text("Player 1 has " + player2Dice + " dice")
$(".pointsPlayer2").text("Player 1 has " + player2Points + " points")
// constructor for players
// players = {
//     constructor () {
//         this.name = ``;
//         this.color = ``;
//         this.shape = ``
//     }
// }