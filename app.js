let currencyEl_one = document.getElementById("converting-rs");
let currencyEl_two = document.getElementById("converted-rs");
const swap = document.getElementById("swap");
let input = document.getElementById("currency1");
let input2 = document.getElementById("currency2");
let rate;
let change_text = document.querySelector(".change_text");
currencyEl_one.selectedIndex = 145;
currencyEl_two.selectedIndex = 64;
fetch(
  `https://v6.exchangerate-api.com/v6/f86c3fb8be294d3f2fe23154/latest/${currencyEl_one.value}`
)
  .then((response) => response.json())
  .then((data) => {
    rate =
      data.conversion_rates[
        `${currencyEl_two[currencyEl_two.selectedIndex].value}`
      ];
    input.value = 1;
    input2.value = input.value * rate;
    change_text.textContent =
      "1" +
      " " +
      currencyEl_one[currencyEl_one.selectedIndex].value +
      " " +
      "=" +
      " " +
      1 * rate +
      " " +
      currencyEl_two[currencyEl_two.selectedIndex].value;
    input.addEventListener("input", () => {
      fetch(
        `https://v6.exchangerate-api.com/v6/f86c3fb8be294d3f2fe23154/latest/${
          currencyEl_one[currencyEl_one.selectedIndex].value
        }`
      )
        .then((response) => response.json())
        .then((data) => {
          let currencyEl_two_value =
            currencyEl_two.options[currencyEl_two.selectedIndex].value;
          rate = data.conversion_rates[`${currencyEl_two_value}`];
          input2.value = input.value * rate;
          change_text.textContent =
            "1" +
            " " +
            currencyEl_one[currencyEl_one.selectedIndex].value +
            " " +
            "=" +
            " " +
            1 * rate +
            " " +
            currencyEl_two_value;
        });
    });
    input2.addEventListener("input", () => {
      fetch(
        `https://v6.exchangerate-api.com/v6/f86c3fb8be294d3f2fe23154/latest/${
          currencyEl_two[currencyEl_two.selectedIndex].value
        }`
      )
        .then((response) => response.json())
        .then((data) => {
          let currencyEl_one_value =
            currencyEl_one.options[currencyEl_one.selectedIndex].value;
          rate = data.conversion_rates[`${currencyEl_one_value}`];
          input.value = input2.value * rate;
          change_text.textContent =
            "1" +
            " " +
            currencyEl_two[currencyEl_two.selectedIndex].value +
            " " +
            "=" +
            " " +
            1 * rate +
            " " +
            currencyEl_one_value;
        });
    });
    currencyEl_one.addEventListener("change", () => {
      fetch(
        `https://v6.exchangerate-api.com/v6/f86c3fb8be294d3f2fe23154/latest/${
          currencyEl_one[currencyEl_one.selectedIndex].value
        }`
      )
        .then((response) => response.json())
        .then((data) => {
          let currencyEl_two_value =
            currencyEl_two.options[currencyEl_two.selectedIndex].value;
          rate = data.conversion_rates[`${currencyEl_two_value}`];
          input2.value = input.value * rate;
          change_text.textContent =
            "1" +
            " " +
            currencyEl_one[currencyEl_one.selectedIndex].value +
            " " +
            "=" +
            " " +
            1 * rate +
            " " +
            currencyEl_two_value;
        });
    });
    currencyEl_two.addEventListener("change", () => {
      let currencyEl_two_value =
        currencyEl_two.options[currencyEl_two.selectedIndex].value;
      rate = data.conversion_rates[`${currencyEl_two_value}`];
      input2.value = input.value * rate;
    });
  });
swap.addEventListener("click", () => {
  [currencyEl_one.selectedIndex, currencyEl_two.selectedIndex] = [
    currencyEl_two.selectedIndex,
    currencyEl_one.selectedIndex,
  ];
  fetch(
    `https://v6.exchangerate-api.com/v6/f86c3fb8be294d3f2fe23154/latest/${
      currencyEl_one[currencyEl_one.selectedIndex].value
    }`
  )
    .then((response) => response.json())
    .then((data) => {
      let currencyEl_two_value =
        currencyEl_two.options[currencyEl_two.selectedIndex].value;
      rate = data.conversion_rates[`${currencyEl_two_value}`];
      input2.value = input.value * rate;
      change_text.textContent =
        "1" +
        " " +
        currencyEl_one[currencyEl_one.selectedIndex].value +
        " " +
        "=" +
        " " +
        1 * rate +
        " " +
        currencyEl_two_value;
    });
});
