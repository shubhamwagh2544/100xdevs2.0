/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: 'Food',
        itemName: 'Pizza',
    }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/


//1
function calculateTotalSpentByCategory1(transactions) {
    let categoryMap = new Map();
    transactions.forEach(transaction => {
        if (categoryMap.has(transaction.category)) {
            categoryMap.set(transaction.category, categoryMap.get(transaction.category) + transaction.price);
        }
        else {
            categoryMap.set(transaction.category, transaction.price);
        }
    })
    return categoryMap;
}

const map = calculateTotalSpentByCategory1([{
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
}]);

map.forEach((value, key) => console.log(`{ category: ${key}, totalSpent: ${value}   }`));



//2
function calculateTotalSpentByCategory2(transactions) {
    let result = [];
    transactions.forEach(transaction => {
        let category = transaction.category;
        let price = transaction.price;
        let index = result.findIndex(item => transaction.category == item.category);
        if (result[index]) {
            result[index].price += price;
        }
        else {
            result.push({ category, price });
        }
    });

    return result;
}

console.log(calculateTotalSpentByCategory2([{
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
}]));