function takeOrder(orderObj, deliveryArray) {
  if(deliveryArray.length < 3){
    deliveryArray.push(orderObj);
  }
  return deliveryArray;
}

//////////////??Why does this work?? Is "index" some sort of keyword in javascript?
function refundOrder(orderNum, deliveryOrders) {
  deliveryOrders.forEach((order, index) => {
    if(order.orderNumber === orderNum) {
      deliveryOrders.splice(index, 1);
    }
  });
}

function listItems(deliveryOrders) {
  var items = [];
  deliveryOrders.forEach((order, index) => {
    if(index < deliveryOrders.length - 1) {
      items.push(order.item);
    } else { items.push(order.item) }
  });
  return items.join(', ');
}

// Why do we have to return the variable, instead of returning true within the if statement, and returning false outside of the for loop?
function searchOrder(deliveryOrders, item) {
  var isOrdered = false;
  deliveryOrders.forEach((order, index) => {
    if(item == order.item){
      isOrdered = true;
    }
  });
  return isOrdered;
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
