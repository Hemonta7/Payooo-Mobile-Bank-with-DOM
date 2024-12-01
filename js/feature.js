document
  .getElementById("add-money")
  .addEventListener("click", function () {
    showform("show-add-money-form");
  });

document
  .getElementById("remove-money")
  .addEventListener("click", function () {
    showform("show-remove-money-form");
  });

document
  .getElementById("transaction-btn")
  .addEventListener("click", function () {
    showform("show-transaction-section");
  });