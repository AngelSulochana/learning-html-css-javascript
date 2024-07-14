const actualShippingCost = 5;
const discountedShippingCost = 3;
let totalprice;

function calculateShippingCost(totalpriceparam) {
    let Shippingcost;

    if (totalpriceparam <= 10){
        Shippingcost = actualShippingCost
    } else if (totalpriceparam <= 20){
        Shippingcost = discountedShippingCost
    } else {
        Shippingcost = 0
    }

    console.log(`Your shipping cost is ${Shippingcost}`)
    console.log(`For a cart value of ${totalpriceparam}`)
}

//inital shopping
totalprice = 10;
//more shopping
totalprice = 19;

calculateShippingCost(totalprice)