
var robotSim = function (commands, obstacles) {
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
        }else {
            for(let j =0;j<obstacles.length;j++) {
                
            }
            if (face === "n") {
                cords[1] = cords[1] + commands[i]
            } else if (face === "e") {
                cords[0] = cords[0] + commands[i]
            } else if (face === "s") {
                cords[1] = cords[1] - commands[i]
            } else {
                cords[0] = cords[0] + commands[i]
            }
        }
    }
    console.log(cords)
};

let commands = [4,-1,4,-2,4]
let obstacles = []
robotSim(commands, obstacles)