const items = [{ name: "Stupid duck 0", quantity: 1, price: 6.99 }];
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const SHIP = 2.99;

function remove(index) {
  items.splice(index, 1);
  render();
}
function update(index, quantity) {
  if (quantity <= 0) {
    remove(index);
    return;
  }
  items[index].quantity = quantity;
  render();
}
function render() {
  let subtotal = 0;
  items.forEach((item) => {
    subtotal += item.quantity * item.price;
  });
  const total = subtotal + SHIP;

  var ssubtotal = document.querySelector("#sub-total");
  var sship = document.querySelector("#ship");
  var stotal = document.querySelector("#total");
  ssubtotal.textContent = "$" + subtotal.toFixed(2);
  sship.textContent = "$" + SHIP;
  stotal.textContent = "$" + total.toFixed(2);

  const html = items
    .map(
      (item) =>
        '<li class="item"><span class="item-name">' +
        item.name +
        '</span><span class="quantity"><button id="btn-des">-</button><input value="' +
        item.quantity +
        '" id="txtQuantity"><button id=btn-ins>+</button></span><span class="price">$' +
        item.price.toFixed(2) +
        "</span></li>"
    )
    .join("");
  document.querySelector("#items").innerHTML = html;

  const buttonDes = [...document.querySelectorAll("#btn-des")];
  const buttonIns = [...document.querySelectorAll("#btn-ins")];
  for (let i = 0; i < items.length; i++) {
    buttonDes[i].addEventListener("click", () => {
      update(i, items[i].quantity - 1);
    });
    buttonIns[i].addEventListener("click", () => {
      update(i, items[i].quantity + 1);
    });
  }

  
  
}
function add() {
    items.push({
      name: "Stupid duck " + items.length,
      quantity: 1,
      price: Math.random() + 6,
    });
    render();
  }
var btnAdd = document.querySelector("#btn-add");
  btnAdd.addEventListener("click", () => {
    add();
  });

render();
