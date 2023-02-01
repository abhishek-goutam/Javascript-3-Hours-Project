let btn = document.getElementById("btn");
let foodItem = document.getElementById("foodItem");
let price = document.getElementById("price");
let table = document.getElementById("autoSizingSelect");
// console.log(foodItem.value)

btn.addEventListener("click", addOrder);

function addOrder(e) {
  e.preventDefault();
  let orderDetail = {
    foodItem: foodItem.value,
    price: price.value,
    table: table.value,
  };
  axios
    .post(
      "https://crudcrud.com/api/ca06052042404b948a7ecc3daf1351d9/orderDetails",
      orderDetail
    )
    .then((res) => {
      showItemsOnScreen(res.data);
      console.log(res.data);
    });
}
window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(
      "https://crudcrud.com/api/ca06052042404b948a7ecc3daf1351d9/orderDetails"
    )
    .then((response) => {
      console.log(response.data);
      for (let i = 0; i < response.data.length; i++) {
        showItemsOnScreen(response.data[i]);
      }
    });
});
function showItemsOnScreen(orderDetail) {  
  const parentNode = document.getElementById("table");
  const childHTML = `<h3>Table${orderDetail.table}</h3> <li id=${orderDetail._id}> ${orderDetail.foodItem} - ${orderDetail.price}
  <button onclick=deleteUser('${orderDetail._id}')> Delete User </button>
</li>`;
  parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function deleteUser(){
    axios
    .delete(
      `https://crudcrud.com/api/ca06052042404b948a7ecc3daf1351d9/orderDetails/${id}`
    )
    .then((res) => {
      console.log(res);  
    }
    );
    removeUserFromScreen(id);
}

function removeUserFromScreen(id){
    const parentNode = document.getElementById("table");
  const childNodeToBeDeleted = document.getElementById('table1');
  parentNode.removeChild(childNodeToBeDeleted);
}
