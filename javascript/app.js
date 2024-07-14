let totalprice;

function calculateShippingCost(totalpriceparam) {
    let Shippingcost;

    if (totalpriceparam <= 10){
        Shippingcost = 5
    } else if (totalpriceparam <= 20){
        Shippingcost = 3
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