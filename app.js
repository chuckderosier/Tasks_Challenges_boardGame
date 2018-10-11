$(function(){ // run jQuery first
    console.log("jQuery is working")
})
// create spaces with div and class
let createDivs
for (let i = 0; i < 36; i++) {
    let createDivs = document.createElement(`div`)
    $(createDivs).addClass(`s` + [i])
    $(`main`).append(createDivs)
}
 // spaces object an value
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
 // constructor for players
players = {
    constructor () {
        this.name = ``;
        this.color = ``;
        this.shape = ``
    }
}