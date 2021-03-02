let Hjelp = false
let Mat = false
basic.forever(function () {
    while (!(Hjelp == true)) {
        if (input.logoIsPressed()) {
            Hjelp = true
        }
    }
    if (Hjelp == true) {
    	
    }
    while (Hjelp == true) {
        if (input.buttonIsPressed(Button.A)) {
            basic.showLeds(`
                # . . . #
                # # . # #
                # . # . #
                # . . . #
                # . . . #
                `)
            Mat = true
        }
        while (Mat == true) {
            if (input.buttonIsPressed(Button.A)) {
                basic.showLeds(`
                    . . # . .
                    . # . # .
                    . . # . .
                    # . # . #
                    . # # # .
                    `)
            }
        }
    }
})
