// 零钱兑换
coins = [1, 2, 5], amount = 11

var coinChange = function(coins, amount) {
    // 每个目标金额对应的最少硬币个数
    const f = [];
    f[0] = 0;

    for (let i = 1; i <= amount; i++) {
        f[i] = Infinity; // 不同金额的最小硬币个数
        // 上一个状态的金额 + 1
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0) {
                f[i] = Math.min(f[i], f[i - coins[j]] + 1);
            }
        }
    }
    // if (f[amount] === Infinity) {
    //     return -1;
    // }
    return f[amount];
};
console.log(coinChange(coins, amount));