[1, 2, 3, 4, 5] / 6

{ 5, 4, 3, 2, 1}


function twoNumberSum(array, targetSum) {
    let map = new Object();
    let res = [];

    for (let i = 0; i < array.length; i++) {
        if (map[(targetSum - array[i])]) {
            if (targetSum - array[i] < array[i]) {
                res.push(targetSum - array[i])
                res.push(array[i])
            } else {
                res.push(array[i])
                res.push(targetSum - array[i])
            }
        }
        map[array[i]] = true
    }

    return res;
}