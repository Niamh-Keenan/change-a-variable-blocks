// Created_by: Niamh_Keenan
// Created_on: September_28_2022
// 
// This_program_controls_the_hunger_of_a_tamagotchi 
let hungryness = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        hungryness = hungryness + 1
        basic.showNumber(hungryness)
    } else if (input.buttonIsPressed(Button.B)) {
        hungryness = 0
        basic.showNumber(hungryness)
    }
})
