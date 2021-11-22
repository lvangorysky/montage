/**
 * 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

    计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

    你可以认为每种硬币的数量是无限的。
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

    // 零钱兑换 动态规划问题 不关心具体配比 只关心多少次
 var coinChange = function(coins, amount) {
    if (amount === 0) {
        return 0
    }
    let arr = new Array(amount + 1).fill(amount + 1)
    arr[0] = 0
    let coin;
    for(let i=0; i<arr.length;i++) {
        for(let j=0;j<coins.length;j++) {
            coin = coins[j]
            if (i >= coin) {
                arr[i] = Math.min(arr[i], 1 + arr[i - coin])
            }
        }
    }
    return arr[amount] === amount + 1 ? -1 : arr[amount];
};