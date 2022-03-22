input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onSound(DetectedSound.Loud, function () {
    basic.showNumber(input.soundLevel())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.soundLevel())
})
basic.forever(function () {
	
})
