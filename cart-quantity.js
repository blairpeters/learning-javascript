let cartQuantity = 0;

document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("show-quantity");
  button.addEventListener("click", function () {
    console.log(`cart quantity: ${cartQuantity}`);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("add-cart");
  button.addEventListener("click", function () {
    console.log(`cart quantity: ${cartQuantity++}`);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("plus-two");
  button.addEventListener("click", function () {
    cartQuantity = cartQuantity + 2;
    console.log(`cart quantity: ${cartQuantity}`);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("plus-three");
  button.addEventListener("click", function () {
    //cartQuantity = cartQuantity + 3;
    cartQuantity += 3;
    console.log(`cart quantity: ${cartQuantity}`);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("reset");
  button.addEventListener("click", function () {
    cartQuantity = 0;
    console.log("cart was reset.");
    console.log(`cart quantity: ${cartQuantity}`);
  });
});
