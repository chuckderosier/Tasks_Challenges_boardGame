$(function(){ // run jQuery first
    console.log("jQuery is working")
})
  // create spaces with div and class
let newDivs = []
function createDivs () {
    for (let i = 0; i < 36; i++) {
        let newDivs = document.createElement(`div`)
        $(newDivs).addClass(`s` + [i])
    }
}
 // call div maker
createDivs()
 // spaces object an value
// spaces = {
//     .s0: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s1: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s2: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s3: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s4: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s5: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s6: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s7: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s8: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s9: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s10: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s11: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s12: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s13: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s14: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s15: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s16: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s17: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s18: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s19: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s20: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s21: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s22: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s23: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s24: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s25: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s26: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s27: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s28: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s29: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s28: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s29: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s30: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s31: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s32: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s33: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s34: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     },
//     .s35: {
//         dice: d0,
//         gainDice: func,
//         text: ``
//     }
// }
 // constructor for players
players = {
    constructor () {
        this.name = ``;
        this.color = ``;
        this.shape = ``
    }
}
