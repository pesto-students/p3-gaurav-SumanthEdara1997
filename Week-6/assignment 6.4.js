const maxProfit =(prices) => {
    let globalProfit = 0;
    // minBuyPrice is set to Infinity because we can guarantee the first element will be set to the buy price 
    let minBuyPrice = Infinity;
  
    for (let i = 0; i < prices.length; i++) {
      if (minBuyPrice > prices[i]) {
        minBuyPrice = prices[i];
      }
  
      const currentProfit = prices[i] - minBuyPrice;
  
      if (currentProfit > globalProfit) {
        globalProfit = currentProfit;
      }
    }
  
    return globalProfit;
  }
  let x = maxProfit([7,1,5,3,6,4]);
  console.log(x);

  //time complexity O(n)
  // space complexity O(1)
/*Greedy Algorithm:

The idea of the greedy algorithm is keep track of the locally optimal solution that will eventually build up to an optimal global solution.

In order for us to get a locally optimal solution we need to keep track of the minimum buy price, the maximum sell price, and the current profit. The formula for getting the current profit is equal to buy price subtracted by the sell price.

On every iteration, we simultaneously check if the current profit is greater than the global profit, if it is then we update the global profit to equal our current profit.*/






/*const maxProfit = (prices) => {
   // let maxProfit = 0;
    let minprice = prices[0];
    for(let sell = 1; sell < prices.length; sell++){
        let sellprice = prices[sell];
        let profit = sellprice-minprice;
        maxProfit = Math.max(maxProfit, profit);
        if(sellingprice < minprice){
            minprice=sellprice;
        }
    }
        return maxProfit;
    
};
let x = maxProfit([[7,1,5,3,6,4]]);
console.log(x);*/

/*const maxProfit = (prices) =>{
    let globalProfit = 0;
      // the reason prices.length - 1 is because we are using the second for loop to scan every element to the right of i
    for (let i = 0; i < prices.length - 1; i++) {
        // the reason j is i + 1 is because we are scanning all the combinations of the first for loop
      for (let j = i + 1; j < prices.length; j++) {
        const currentProfit = prices[j] - prices[i]
  
        if (currentProfit > globalProfit) {
          globalProfit = currentProfit
        }
      }
    }
  
    return globalProfit;
  }
  let x = maxProfit([7,6,4,3,1]);
console.log(x);*/
