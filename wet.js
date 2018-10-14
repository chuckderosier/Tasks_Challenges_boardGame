$(function () { // run jQuery first
    console.log("jQuery is working")
})
// game play vars
let playDice1 = 1
let playPoints1 = 0
let playDice2 = 1
let playPoints2 = 0
let numDice
let addPoints = 0
let addDice = 0
let rollNum = 0
let moveDist = 0
let youClicked = 0
let compRoll = 0
let playerRoll = 0
let compDice = 1
let dice
let whatType
let turn = 1
// create spaces with divs and classes
let createDivs
for (let i = 1; i < 25; i++) {
    let createDivs = document.createElement(`div`)
    $(createDivs).addClass([i])
    $(createDivs).attr('id', `s` + [i])
    $(`main`).append(createDivs)
}
// spaces pair values
spaces = {
    s1: {
        type: `t`,
        dice: 0,
        gainDice: 1,
        gainPoints: 0,
        text: `free die`
    },
    s2: {
        type: `c`,
        dice: 1,
        gainDice: 0,
        gainPoints: 1,
        text: `roll > 1 die`
    },
    s3: {
        type: `t`,
        dice: 1,
        gainDice: 1,
        gainPoints: 0,
        text: `roll < 1 die`
    },
    s4: {
        type: `t`,
        dice: 2,
        gainDice: 1,
        gainPoints: 0,
        text: `roll < 2 dice`
    },
    s5: {
        type: `c`,
        dice: 2,
        gainDice: 1,
        gainPoints: 0,
        text: `roll > 2`
    },
    s6: {
        type: `c`,
        dice: 1,
        gainDice: 0,
        gainPoints: 1,
        text: `roll > 1 die`
    },
    s7: {
        type: `t`,
        dice: 1,
        gainDice: 1,
        gainPoints: 0,
        text: `roll < 1 die`
    },
    s8: {
        type: `c`,
        dice: 1,
        gainDice: 0,
        gainPoints: 1,
        text: `roll > 1 die`
    },
    s9: {
        type: `t`,
        dice: 2,
        gainDice: 1,
        gainPoints: 0,
        text: `roll < 2 dice`
    },
    s10: {
        type: `c`,
        dice: 2,
        gainDice: 1,
        gainPoints: 0,
        text: `roll > 2 dice`
    },
    s11: {
        type: `t`,
        dice: 2,
        gainDice: 1,
        gainPoints: 0,
        text: `roll < 2 dice`
    },
    s12: {
        type: `c`,
        dice: 2,
        gainDice: 1,
        gainPoints: 0,
        text: `roll > 2 dice`
    },
    s13: {
        type: `c`,
        dice: 3,
        gainDice: 0,
        gainPoints: 1,
        text: `roll > 3 dice`
    },
    s14: {
        type: `t`,
        dice: 2,
        gainDice: 1,
        gainPoints: 0,
        text: `roll < 2 dice`
    },
    s15: {
        type: `c`,
        dice: 2,
        gainDice: 1,
        gainPoints: 0,
        text: `roll > 2 dice`
    },
    s16: {
        type: `t`,
        dice: 2,
        gainDice: 1,
        gainPoints: 0,
        text: `roll < 2 dice`
    },
    s17: {
        type: `c`,
        dice: 2,
        gainDice: 1,
        gainPoints: 0,
        text: `roll > 2 dice`
    },
    s18: {
        type: `c`,
        dice: 1,
        gainDice: 0,
        gainPoints: 1,
        text: `roll > 1 die`
    },
    s19: {
        type: `t`,
        dice: 1,
        gainDice: 1,
        gainPoints: 0,
        text: `roll < 1 die`
    },
    s20: {
        type: `c`,
        dice: 2,
        gainDice: 1,
        gainPoints: 0,
        text: `roll > 2 dice`
    },
    s21: {
        type: `t`,
        dice: 2,
        gainDice: 1,
        gainPoints: 0,
        text: `roll < 2 dice`
    },
    s22: {
        type: `c`,
        dice: 2,
        gainDice: 1,
        gainPoints: 0,
        text: `roll > 2 dice`
    },
    s23: {
        type: `c`,
        dice: 1,
        gainDice: 0,
        gainPoints: 1,
        text: `roll > 1 die`
    },
    s24: {
        type: `t`,
        dice: 1,
        gainDice: 1,
        gainPoints: 0,
        text: `roll < 1 die`
    }
}
// nav bar rules
$('.rules').click(function () {
    alert("—- The Goal — Get to the center of the board first. To get there, you have to overcome Challenges to earn Points and accomplish Tasks to earn Die.n/— Start — Player with the next birthday goes first. Each player begins at Start. Each Die you earn gives you one die to roll for use in completing Tasks or overcoming Challenges, explained below.n/—- Movement —- On your turn, roll to move around the board. You can move clockwise or counter-clockwise. You only play the spot on which you land./n—- Task Spaces —- blue spaces are 1 die, purple spaces are 2 dice, orange spaces are 3 dice —- When you land on a Task space the app will roll that number of dice as indicated the space. You roll a number all of your dice you’ve earned. If you roll lower than the total rolled for the Task you earn 1 Die when in outer loop or 2 Dice  when in inner loop to use on your next Task or Challenge. Obviously the more you Dice the harder it will be to accomplish Tasks but the easier it will be to overcome challenges. Tie rolls are successes./n—- Challenge Spaces —- red spaces are 1 die, pink spaces are 2 dice, brown spaces are 3 dice —- When you land on a Challenge space the app will roll that number of dice as indicated the space. You roll a number all of your dice you’ve earned. If you roll higher than the total rolled for the Challenge you earn 1 Point when in outer loop or 2 points when in inner loop. When you get 4 Points you may advance to the inner loop from the green space on the outer loop. When you get to 8 points you may enter the center space from the green space on the inner loop. Exact roll not necessary. You win.")
}
)
// create and place players on start
let player1 = $(`#s1`).append(`<div class="play1"></div>`)
let player2 = $(`#s1`).append(`<div class="play2"></div>`)
// display initial players points and dice
$(".dicePlayer1").text("Player 1 has " + playDice1 + " dice")
$(".pointsPlayer1").text("Player 1 has " + playPoints1 + " points")
$(".dicePlayer2").text("Player 2 has " + playDice2 + " dice")
$(".pointsPlayer2").text("Player 2 has " + playPoints2 + " points")
// players turn
function play() {
    dice = Math.floor((Math.random() * 6) + 1)
    let whereAm = document.querySelector(`.play` + turn).parentNode.id // find/set player location
    $(`.windowRoll`).text(`Player ` + turn + ` turn`)
    $(`.roll`).one(`click`, function () { // roll to move
        $(`.battleWindowC`).text(``)
        $(`.battleWindowP`).text(``)
        moveDist = dice
        $(`.windowRoll`).text(`You rolled a ` + moveDist)
        let spaceOn = $(`.play` + turn).parent().prop(`class`)
        spaceOn = parseInt(spaceOn)
        if (youClicked === 0) {
            $(`.counter`).one(`click`, function () { // move counter clockwise
                youClicked += 1
                spaceOn += moveDist
                if (spaceOn > 24) {
                    spaceOn = (24 - spaceOn) * -1
                    $(`.play` + turn).appendTo(`.` + spaceOn)
                } else {
                    $(`.play` + turn).appendTo(`.` + spaceOn)
                }
                whereAm = document.querySelector(`.play` + turn).parentNode.id
                whatType = spaces[whereAm].type
            })
        }
        if (youClicked === 0) { // move clockwise
            $(`.clock`).one(`click`, function () {
                youClicked += 1
                spaceOn -= moveDist
                if (spaceOn > 0) {
                    $(`.play` + turn).appendTo(`.` + spaceOn)
                } else {
                    spaceOn = (24 + spaceOn)
                    $(`.play` + turn).appendTo(`.` + spaceOn)
                }
                whereAm = document.querySelector(`.play` + turn).parentNode.id
                whatType = spaces[whereAm].type
            })
        }
        // battle button
        $(`.battle`).one(`click`, function () {
            compDice = spaces[whereAm].dice
            if (turn === 1) {
                for (let cr = 0; cr < compDice; cr++) {
                    compRoll += dice
                    console.log(compRoll)
                }
                if (turn = 1) {
                    playDice = playDice1
                } else {
                    playDice = playDice2
                }
                for (let pr = 0; pr < playDice; pr++) {
                    playerRoll += dice
                }
                turn += 1
                $(`.battleWindowC`).text(`Computer rolled ` + compRoll)
                $(`.battleWindowP`).text(`You rolled ` + playerRoll)
                if (whatType == `t`) {
                    if (playerRoll <= compRoll) {
                        playDice1 += spaces[whereAm].gainDice
                        $(`.results`).text(`You succeeded!`)
                    }
                    if (playerRoll > compRoll) {
                        $(`.results`).text(`Try Again`)
                    }
                }
                if (whatType == `c`) {
                    if (playerRoll >= compRoll) {
                        playPoints1 += spaces[whereAm].gainPoints
                        $(`.results`).text(`You succeeded!`)
                    }
                    if (playerRoll < compRoll) {
                        $(`.results`).text(`Try Again`)
                    }
                    if (playPoints1 >= 10) {
                        alert(`Player 1 WINS!!`)
                    }
                }
            } else {
                turn -= 1
                playerRoll = dice * playDice2
                $(`.battleWindowC`).text(`Computer rolled ` + compRoll)
                $(`.battleWindowP`).text(`You rolled ` + playerRoll)
                if (whatType == `t`) {
                    if (playerRoll <= compRoll) {
                        playDice2 += spaces[whereAm].gainDice
                        $(`.results`).text(`You succeeded!`)
                    }
                    if (playerRoll > compRoll) {
                        $(`.results`).text(`Try Again`)
                    }
                }
                if (whatType == `c`) {
                    if (playerRoll >= compRoll) {
                        playPoints2 += spaces[whereAm].gainPoints
                        $(`.results`).text(`You succeeded!`)
                    }
                    if (playerRoll < compRoll) {
                        $(`.results`).text(`Try Again`)
                    }
                    if (playPoints2 >= 10) {
                        alert(`Player 2 WINS!!`)
                    }
                }
            }
            playerRoll = 0
            compRoll = 0
            youClicked = 0
            $(".dicePlayer1").text("Player 1 has " + playDice1 + " dice")
            $(".pointsPlayer1").text("Player 1 has " + playPoints1 + " points")
            $(".dicePlayer2").text("Player 2 has " + playDice2 + " dice")
            $(".pointsPlayer2").text("Player 2 has " + playPoints2 + " points")
            play ()
        })
    })
}
$(`.start`).click(function () {
    play()
})