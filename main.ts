input.onGesture(Gesture.Shake, function () {
    x += 1
})
let x = 0
let list = 0
basic.forever(function () {
    basic.showNumber(x)
})
