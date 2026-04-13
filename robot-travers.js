var robotSim = function (commands, ob) {
	let cords = [0, 0];
	let face = "n";
    let maxDis = 0;
    let set = new Set(ob.map(([x,y]) => `${x},${y}`))

	for (let i = 0; i < commands.length; i++) {
		if (commands[i] === -2) {
			if (face === "n") {
				face = "w";
			} else if (face === "w") {
				face = "s";
			} else if (face === "s") {
				face = "e";
			} else {
				face = "n";
			}
		} else if (commands[i] === -1) {
			if (face === "n") {
				face = "e";
			} else if (face === "e") {
				face = "s";
			} else if (face === "s") {
				face = "w";
			} else {
				face = "n";
			}
		} else {
            for(let step =0;step<commands[i];step++) {
                let X = cords[0];
                let Y = cords[1];

                if(face === "n") Y++;
                else if(face === "e") X++;
                else if(face == "s")Y--;
                else X--;

                if(!set.has(`${X},${Y}`)) {
                    cords[0] = X;
                    cords[1] = Y
                }

                maxDis = Math.max(maxDis, cords[0]*cords[0] + cords[1]*cords[1])
            }
		}
	}

    console.log(cords, maxDis)
    return maxDis

};

let commands = [4,-1,3];
let ob = [];
robotSim(commands, ob);
