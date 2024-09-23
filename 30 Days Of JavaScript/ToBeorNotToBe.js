var expect = function(val) {
    return {
        toBe: function toBe(otherVal) {
        if(val===otherVal) {return true;}
        else {throw "Not Equal";}
        },
        notToBe: function notToBe(otherVal) {
        if(val!==otherVal) {return true;}
        else {throw "Equal";}
        }
    };
};

console.log(expect(5).toBe(5)); 
console.log(expect(5).notToBe(5)); 