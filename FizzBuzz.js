var fizzBuzz = function(n) {
    var answer = [];
    for (var i=1; i<=n; i++) {
        var divisibleBy3 = (i % 3 === 0);
        var divisibleBy5 = (i % 5 === 0);

        if(divisibleBy3 && divisibleBy5) {
            answer.push("FizzBuzz");
        }
        else if (divisibleBy3) {
            answer.push("Fizz");
        }
        else if (divisibleBy5) {
            answer.push("Buzz");
        }
        else {
            answer.push(i.toString()); 
        }
    }

    return answer;
};

var n = 3
console.log(fizzBuzz(n));

var n = 5;
console.log(fizzBuzz(n));

var n = 15;
console.log(fizzBuzz(n));