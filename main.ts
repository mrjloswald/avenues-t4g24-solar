fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    if (manual == true) {
        basic.showIcon(IconNames.Diamond)
        movePanelBy(5 * difference)
    }
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    if (manual == true) {
        basic.showIcon(IconNames.Diamond)
        movePanelBy(5 * difference)
    }
})
input.onButtonPressed(Button.A, function () {
    manual = !(manual)
})
function movePanel () {
    movePanelBy(10)
}
function movePanelBy (degrees: number) {
    basic.showIcon(IconNames.StickFigure)
    position += degrees
    if (position > 180) {
        position = 0
    }
    if (position < 0) {
        position = 0
    }
    fwdMotors.leftServo.fwdSetAngle(position)
    basic.pause(200)
}
let position = 0
let manual = false
manual = false
position = 90
fwdMotors.leftServo.fwdSetAngle(position)
basic.forever(function () {
    if (manual == false) {
        if (fwdSensors.solar1.fwdLightLevel() > 75) {
            basic.showIcon(IconNames.Target)
            fwdMotors.leftServo.fwdSetEnabled(false)
        } else {
            movePanel()
            basic.showIcon(IconNames.SmallDiamond)
        }
    }
})
