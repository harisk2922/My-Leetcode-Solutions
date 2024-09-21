var maximumWealth = function (accounts) {
    var maxSum = 0;
    for (var i = 0; i < accounts.length; i++) {
        var wealth = 0;
        for (var j = 0; j < accounts[i].length; j++) {
            wealth = wealth + accounts[i][j];
        }
        if (wealth > maxSum) {
            maxSum = wealth;
        }
    }

    return maxSum;
};

let accounts = [[1,2,3],[3,2,1]];
console.log("Maximum Wealth: " + maximumWealth(accounts));