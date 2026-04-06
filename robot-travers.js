
var robotSim = function (commands, ob) {
    let cords = [0, 0];
    let face = 'n';
    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === -2) {
            if (face === "n") {
                face = 'w'
            } else if (face === "w") {
                face = "s"
            } else if (face === "s") {
                face = "e"
            } else {
                face = "n"
            }
        } else if (commands[i] === -1) {
            if (face === "n") {
                face = 'e'
            } else if (face === "e") {
                face = "s"
            } else if (face === "s") {
                face = "w"
            } else {
                face = "n"
            }
        } else {
            for (let j = 0; j < ob.length; j++) {
                if (face === "n") {
                    if (ob[0] === cords[0] && cords[1] + commands[i] > ob[1]) {
                        cords[1] = cords[1] + ob[1] - 1
                    } else {
                        cords[1] = cords[1] + commands[i]
                    }
                } else if (face === "e") {
                    cords[0] = cords[0] + commands[i]
                } else if (face === "s") {
                    cords[1] = cords[1] - commands[i]
                } else {
                    cords[0] = cords[0] + commands[i]
                }
            }

        }
    }
    console.log(cords)
};

let commands = [4, -1, 4, -2, 4]
let ob = []
robotSim(commands, ob)