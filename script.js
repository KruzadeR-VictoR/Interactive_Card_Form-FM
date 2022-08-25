const cardNumber = document.querySelector("#card-number");
const cardError = document.querySelector(".card-num .error");
const confirmBtn = document.querySelector(".confirmBtn");

// Validate card number
function validateNumber(e) {
  if (isNaN(e.target.value)) {
    e.target.parentNode.classList.add("error-active");
  } else {
    setCard(e);
    e.target.parentNode.classList.remove("error-active");
  }
}

// validate expiry date & CVC
function validate(e) {
  if (e.target.value == "") {
    e.target.classList.add("input-err");
    e.target.parentNode.parentNode.classList.add("err-active");
  } else {
    e.target.classList.remove("input-err");
    e.target.parentNode.parentNode.classList.remove("err-active");
  }
}
// validate CVC
function validateCvc(e) {
  if (e.target.value == "") {
    e.target.classList.add("input-err");
    e.target.parentNode.classList.add("err-active");
  } else {
    e.target.classList.remove("input-err");
    e.target.parentNode.classList.remove("err-active");
  }
}

// set card values

function setCard(e) {
  const cNo = document.querySelector(".c-no");
  const cName = document.querySelector(".c-name");
  const mm = document.querySelector(".mm");
  const yy = document.querySelector(".yy");
  const cvcNo = document.querySelector(".cvc-no");

  if (e.target.id == "name") {
    cName.innerHTML = e.target.value;
  }
  if (e.target.id == "card-number") {
    cNo.innerHTML = e.target.value.split(/(.{4})/).join(" ");
  }

  if (e.target.id == "month") {
    mm.innerHTML = e.target.value;
  }
  if (e.target.id == "year") {
    yy.innerHTML = e.target.value;
  }
  if (e.target.id == "CVC") {
    cvcNo.innerHTML = e.target.value;
  }
}

//clicking om confirm Button
confirmBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const right = document.querySelector(".right");
  const inputs = [...document.querySelectorAll("input")];

  inputs.forEach((input) => {
    console.log(input.value);
    if (input.value != "") {
      right.classList.add("active");
    }
  });
});
