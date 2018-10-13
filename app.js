$(function () { // run jQuery first
    console.log("jQuery is working")
})

// game play vars
let player1Dice = 1
let player1Points = 0
let player2Dice = 1
let player2Points = 0
let numDice
let addPoints = 0
let addDice = 0
let rollNum = 0
let moveDist = 0
let youClicked = 0
let compRoll
let playerRoll
let compDice = 1
let dice = Math.floor((Math.random() * 6) + 1)
// create spaces with divs and classes
let createDivs
let createInDivs
for (let i = 1; i < 25; i++) {
    let createDivs = document.createElement(`div`)
    $(createDivs).addClass([i])
    $(createDivs).attr('id', `s` + [i])
    $(`main`).append(createDivs)
}
let player1 = $(`#s1`).append(`<div class="play1"></div>`)
let player2 = $(`#s1`).append(`<div class="play2"></div>`)
// spaces pair values
spaces = {
    s1: {
        type: `free`,
        dice: 0,
        gainDice: 0,
        gainPoints: 0,
        text: ``
    },
    s2: {
        type: `c`,
        dice: 1,
        gainDice: 0,
        gainPoints: 1,
        text: ``
    },
    s3: {
        type: `t`,
        dice: 1,
        gainDice: 1,
        gainPoints: 0,
        text: ``
    },
    s4: {
        type: `t`,
        dice: 2,
        gainDice: 1,
        gainPoints: 0,
        text: ``
    },
    s5: {
        type: `c`,
        dice: 2,
        gainDice: 1,
        gainPoints: 0,
        text: ``
    },
    s6: {
        type: `c`,
        dice: 1,
        gainDice: 0,
        gainPoints: 1,
        text: ``
    },
    s7: {
        type: `t`,
        dice: 1,
        gainDice: 1,
        gainPoints: 0,
        text: ``
    },
    s8: {
        type: `c`,
        dice: 1,
        gainDice: 0,
        gainPoints: 1,
        text: ``
    },
    s9: {
        type: `t`,
        dice: 2,
        gainDice: 1,
        gainPoints: 0,
        text: ``
    },
    s10: {
        type: `c`,
        dice: 2,
        gainDice: 1,
        gainPoints: 0,
        text: ``
    },
    s11: {
        type: `t`,
        dice: 2,
        gainDice: 1,
        gainPoints: 0,
        text: ``
    },
    s12: {
        type: `c`,
        dice: 2,
        gainDice: 1,
        gainPoints: 0,
        text: ``
    },
    s13: {
        type: `free`,
        dice: 0,
        gainDice: 0,
        gainPoints: 0,
        text: ``
    },
    s14: {
        type: `t`,
        dice: 2,
        gainDice: 1,
        gainPoints: 0,
        text: ``
    },
    s15: {
        type: `c`,
        dice: 2,
        gainDice: 1,
        gainPoints: 0,
        text: ``
    },
    s16: {
        type: `t`,
        dice: 2,
        gainDice: 1,
        gainPoints: 0,
        text: ``
    },
    s17: {
        type: `c`,
        dice: 2,
        gainDice: 1,
        gainPoints: 0,
        text: ``
    },
    s18: {
        type: `c`,
        dice: 1,
        gainDice: 0,
        gainPoints: 1,
        text: ``
    },
    s19: {
        type: `t`,
        dice: 1,
        gainDice: 1,
        gainPoints: 0,
        text: ``
    },
    s20: {
        type: `c`,
        dice: 2,
        gainDice: 1,
        gainPoints: 0,
        text: ``
    },
    s21: {
        type: `t`,
        dice: 2,
        gainDice: 1,
        gainPoints: 0,
        text: ``
    },
    s22: {
        type: `c`,
        dice: 2,
        gainDice: 1,
        gainPoints: 0,
        text: ``
    },
    s23: {
        type: `c`,
        dice: 1,
        gainDice: 0,
        gainPoints: 1,
        text: ``
    },
    s24: {
        type: `t`,
        dice: 1,
        gainDice: 1,
        gainPoints: 0,
        text: ``
    }
}
//     
// nav bar items
$('.rules').click(function () { // rules button
    alert("—- The Goal — Get to the center of the board first. To get there, you have to overcome Challenges to earn Points and accomplish Tasks to earn Die.n/— Start — Player with the next birthday goes first. Each player begins at Start. Each Die you earn gives you one die to roll for use in completing Tasks or overcoming Challenges, explained below.n/—- Movement —- On your turn, roll to move around the board. You can move clockwise or counter-clockwise. You only play the spot on which you land./n—- Task Spaces —- blue spaces are 1 die, purple spaces are 2 dice, orange spaces are 3 dice —- When you land on a Task space the app will roll that number of dice as indicated the space. You roll a number all of your dice you’ve earned. If you roll lower than the total rolled for the Task you earn 1 Die when in outer loop or 2 Dice  when in inner loop to use on your next Task or Challenge. Obviously the more you Dice the harder it will be to accomplish Tasks but the easier it will be to overcome challenges. Tie rolls are successes./n—- Challenge Spaces —- red spaces are 1 die, pink spaces are 2 dice, brown spaces are 3 dice —- When you land on a Challenge space the app will roll that number of dice as indicated the space. You roll a number all of your dice you’ve earned. If you roll higher than the total rolled for the Challenge you earn 1 Point when in outer loop or 2 points when in inner loop. When you get 4 Points you may advance to the inner loop from the green space on the outer loop. When you get to 8 points you may enter the center space from the green space on the inner loop. Exact roll not necessary. You win.")
}
)
// player dice
for (let k = player1Dice; k < player1Dice; k++) {
    rollNum = Math.floor((Math.random() * 6) + 1)
}
// display players points and dice

// players turn
let whereAm = document.querySelector(`.play1`).parentNode.id
$(`.windowRoll`).text(`Player 1 turn`)
$(`.roll`).one(`click`, function () {
    moveDist = dice
    $(`.windowRoll`).text(`You rolled a ` + moveDist)
    let spaceOn = $(`.play1`).parent().prop(`class`)
    spaceOn = parseInt(spaceOn)
    if (youClicked === 0) {
        $(`.counter`).one(`click`, function () {
            youClicked += 1
            spaceOn += moveDist
            if (spaceOn > 24) {
                spaceOn = (24 - spaceOn) * -1
                $(`.play1`).appendTo(`.` + spaceOn)
            } else {
                $(`.play1`).appendTo(`.` + spaceOn)
            }
            whereAm = document.querySelector(`.play1`).parentNode.id
        })
    }
    if (youClicked === 0) {
        $(`.clock`).one(`click`, function () {
            youClicked += 1
            spaceOn -= moveDist
            if (spaceOn > 0) {
                $(`.play1`).appendTo(`.` + spaceOn)
            } else {
                spaceOn = (24 + spaceOn)
                $(`.play1`).appendTo(`.` + spaceOn)
            }
            whereAm = document.querySelector(`.play1`).parentNode.id
        })
    }
    if (spaces[whereAm].type !== `free`) {
    $(`.battle`).one(`click`, function () {
        compDice = spaces[whereAm].dice
        compRoll = dice * compDice
        playerRoll = dice * player1Dice
        $(`.battleWindowC`).text(`Computer rolled ` + compRoll)
        $(`.battleWindowP`).text(`You rolled ` + playerRoll)
    })
    }
    if (spaces[whereAm].type === `t`) {
        if (playerRoll <= compRoll) {
            player1Dice += spaces[whereAm].gainDice
            $(`.results`).text(`You succeeded!`)
        }
        if (playerRoll > compRoll) {
            $(`.results`).text(`Try Again`)
        }
    }
    if (spaces[whereAm].type === `c`) {
        if (playerRoll >= compRoll) {
            player1Points += spaces[whereAm].gainPoints
            $(`.results`).text(`You succeeded!`)
        }
        if (playerRoll < compRoll) {
            $(`.results`).text(`Try Again`)
        }
    }
})

$(".dicePlayer1").text("Player 1 has " + player1Dice + " dice")
$(".pointsPlayer1").text("Player 1 has " + player1Points + " points")
$(".dicePlayer2").text("Player 2 has " + player2Dice + " dice")
$(".pointsPlayer2").text("Player 2 has " + player2Points + " points")

// constructor for players
// players = {
//     constructor () {
//         this.name = ``;
//         this.color = ``;
//         this.shape = ``
//     }
// }
