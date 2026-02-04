//1
function firstPattern() {
    for (let i = 0; i < 5; i++) {
        let row = " "
        for (let j = 0; j < 5; j++) {
            row = "*" + row

        }
        console.log(row)
    }
}

function secondPattern() {
    for (let i = 0; i < 5; i++) {
        let row = " "
        for (let j = 0; j <= i; j++) {
            row = "*" + row

        }
        console.log(row)
    }
}
function thirdPattern() {
    for (let i = 0; i < 5; i++) {
        let row = " "
        for (let j = 0; j <= i; j++) {
            row = row + (j + 1)

        }
        console.log(row)
    }
}

function fourthPattern() {
    for (let i = 0; i < 5; i++) {
        let row = " "
        for (let j = 0; j <= i; j++) {
            row = row + (i + 1)
        }
        console.log(row)
    }
}

function fifthPattern() {
    for (let i = 0; i < 5; i++) {
        let row = " "
        for (let j = 0; j < 5 - i; j++) {
            row = "*" + row
        }
        console.log(row)
    }
}

function sixthPattern() {
    for (let i = 0; i < 5; i++) {
        let row = " "
        for (let j = 0; j < 5 - i; j++) {
            row = row + (j + 1)
        }
        console.log(row)
    }
}



function seventhPattern() {
    for (let i = 5; i; i--) {
        let row = ""
        for (let k = 0; k < 5 - i + 1; k++) {
            row = row + " "
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            row = row + "*"
        }
        console.log(row)
    }
}

function eightPattern() {
    for (let i = 0; i < 5; i++) {

        for (let k = 0; k < i; k++) {
            row = row + " "
        }
        for (let j = 0; j < 2 * (4 - i) + 1; j++) {
            row = row + "*"
        }
        console.log(row)
    }
}

function ninthPattern() {
    let a = -1
    for (let i = 0; i < 9; i++) {
        let row = ""
        if (i > 4) {
            a = a - 2
            for (let k = 0; k < i - 5 + 1; k++) {
                row = row + " "
            }
        } else {
            for (let k = 0; k < 4 - i; k++) {
                row = row + " "
            }
            a = a + 2
        }
        for (let j = 0; j < a; j++) {
            row = row + "*"
        }
        console.log(row)
    }
}


function tenthPattern(n) {
    let a = -1
    let count = 1;
    for (let i = 0; i < n * 2 - 1; i++) {
        let row = ""
        if (i > n - 1) {
            for (let k = 0; k < (n - 1) - (i - 2 * count); k++) {
                row = row + " "
            }
            // console.log(i - 2 * count, i)
            for (let j = 0; j < (i - 2 * count) * 2 + 1; j++) {
                row = row + "*"
            }
            console.log(row)

            count++;
        } else {
            // console.log(i)
            for (let k = 0; k < (n - 1) - i; k++) {
                row = row + " "
            }
            for (let j = 0; j < i * 2 + 1; j++) {
                row = row + "*"
            }
            console.log(row)
        }
    }
}

function elevenPattern(n) {
    let count = 0;
    for (let i = 0; i < 2 * n - 1; i++) {
        if (i < n) {
            count++
        } else {
            count--
        }
        let row = ""
        for (let j = 0; j < count; j++) {
            row = row + "*"
        }
        console.log(row)
    }
}

function twelPattern(n) {
    for (let i = 0; i < n; i++) {
        // console.log(i,"%","2=", i%2)
        let first = i % 2 === 0 ? "1" : "0"
        let row = ""
        for (let j = 0; j <= i; j++) {
            if (j % 2 === 0) {
                row = row + first
            } else {
                row = row + (first === "1" ? "0" : "1")
            }

        }
        console.log(row)
    }
}

function thirteenPattern(n) {
    for (let i = 0; i < n; i++) {
        let row = ""
        for (let j = 0; j <= i; j++) {
            row = row + (i%2===0 ? j%2===0 ? "1" : "0": j%2===0 ? "0" : "1")
        }
        console.log(row)
    }
}

function forteenPattern(n) {
    for (let i = 0; i < n; i++) {
        let row = ""
        for (let j = 0; j < n; j++) {
            if(j<=i) {
                row = row + (j + 1)
            }else {
                row = row + " "
            }
        }
        for(let k = 0;k<n-1 -i;k++) {
            row = row + " "
        }
        for(let j = i; j>=0; j--) {
            row = row + (j+1)
        }
        console.log(row)
    }
}

function sisteenPattern(n) {
    for (let i = 0; i < n; i++) {
        let row = ""
        
        // for (let j = 0; j < n; j++) {
        //     if(j >= ((n-1)-i)) {
        //         row = row + i
        //     }else {
        //         row = row + " "
        //     }
        // }
        for(let k = 0;k<n-1 -i;k++) {
            row = row + " "
        }
        for(let j = i; j>=0; j--) {
            row = row + (j+1)
        }
        
        console.log(row)
    }
}




// firstPattern()
// secondPattern()
// thirdPattern()
// fourthPattern()
// fifthPattern()
// sixthPattern()
// seventhPattern()
// eightPattern()
// ninthPattern()
// tenthPattern(5)
// elevenPattern(5)
// twelPattern(5)
// thirteenPattern(5)
forteenPattern(4)
// fifteenPattern(4)
// sisteenPattern(4)

