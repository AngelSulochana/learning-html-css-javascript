function calculateShippingCost() {
    let totalprice = 19;
    let Shippingcost;

    if (totalprice <= 10){
        Shippingcost = 5
    } else if (totalprice <= 20){
        Shippingcost = 3
    } else {
        Shippingcost = 0
    }

    console.log(`Your shipping cost is ${Shippingcost}`)
}

calculateShippingCost()