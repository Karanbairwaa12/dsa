// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.
// Example 2:

// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Total profit is 4.
var maxProfit = function (prices) {
    // let i = 0;
    // let j = 1;
    let sum = 0;
    // while (j < prices.length) {
    //     if (prices[i] > prices[j]) {
    //         i++;
    //         j++;
    //         continue;
    //     }
    //     while (j < prices.length - 1 && prices[j] <= prices[j + 1]) {
    //         j++;
    //     }
    //     sum = sum + prices[j] - prices[i]
    //     i = j+1;
    //     j = i+1;

    // }
    for(let i =1;i<prices.length;i++) {
        if(prices[i] >= prices[i-1]) {
            sum = sum + prices[i] - prices[i-1]
        }
    }
    console.log(sum)
};

let prices = [1, 5, 3, 8, 12]
maxProfit(prices)