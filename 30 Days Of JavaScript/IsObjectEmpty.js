var isEmpty = function(obj) {
    if(Object.keys(obj).length === 0) {
        return true;
    } else {
        return false;
    }
};

const nonEmptyObj = { name: "John", age: 30 };
console.log(isEmpty(nonEmptyObj)); 

const emptyObj = {};
console.log(isEmpty(emptyObj));