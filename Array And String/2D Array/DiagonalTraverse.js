function findDiagonalOrder(mat) {
    if (mat.length === 0 || mat[0].length === 0) return [];

    const m = mat.length;
    const n = mat[0].length;
    let result = [];
    let i = 0, j = 0;
    let goingUp = true;

    while (result.length < m * n) {
        result.push(mat[i][j]);

        if (goingUp) {
            if (j === n - 1) {
                i++;
                goingUp = false;
            } else if (i === 0) {
                j++;
                goingUp = false;
            } else {
                i--;
                j++;
            }
        } else {
            if (i === m - 1) {
                j++;
                goingUp = true;
            } else if (j === 0) {
                i++;
                goingUp = true;
            } else {
                i++;
                j--;
            }
        }
    }
  
    return result;
}

let matrix = [
            [1,2,3],   
            [4,5,6],
            [7,8,9]  
            ];

console.log(findDiagonalOrder(matrix));