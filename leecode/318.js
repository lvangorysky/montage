/**
 * 初始时有 n 个灯泡处于关闭状态。第一轮，你将会打开所有灯泡。接下来的第二轮，你将会每两个灯泡关闭一个。
    第三轮，你每三个灯泡就切换一个灯泡的开关（即，打开变关闭，关闭变打开）。第 i 轮，你每 i 个灯泡就切换一个灯泡的开关。直到第 n 轮，你只需要切换最后一个灯泡的开关。
    找出并返回 n 轮后有多少个亮着的灯泡。
 * @param {number} n
 * @return {number}
 */
 var bulbSwitch1 = function(n) {
    let arr = [];
    let count = 0
    arr.length = n;
    for(let i=1;i<n+1; i++ ) {
        if (i === 1) {
            for (let j=0;j<n;j++) {
                arr[j] = true
                count = n
            }
        } else {
            for (let j=0;j<n;j++) {
                if (j !== 0 && ((j+1) % i === 0)) {
                    if (arr[j]) {
                        count = count - 1
                    } else {
                        count = count + 1
                    }
                    arr[j] = !arr[j]
                }
            }
        } 
    }
    return count
};

var bulbSwitch2 = function(n) {
    return Math.floor(Math.sqrt(n))
}