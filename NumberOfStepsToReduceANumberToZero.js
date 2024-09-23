var numberOfSteps = function (num) {
    if (num==0) {return 0;}
    var steps = 0;
    let i = num;
    do {
        if (i % 2 === 0) {
            i = i / 2;
        }
        else {
            i = i - 1;
        }
        steps++;
    } while (i!==0)

    return steps;
};

console.log(numberOfSteps(0));
console.log(numberOfSteps(14));
console.log(numberOfSteps(30));