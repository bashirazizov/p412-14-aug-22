let emailIn = document.querySelector(".email");
let nameIn = document.querySelector(".usnm");
let passIn = document.querySelector(".pass");
let rpPasIn = document.querySelector(".rp-pass");
let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!validateEmail(emailIn.value)) {
    emailIn.classList.add("is-invalid");
    return;
  }

  if (nameIn.value == "") {
    nameIn.classList.add("is-invalid");
    return;
  }

  if (!validatePass(passIn.value)) {
    passIn.classList.add("is-invalid");
    return;
  }

  if (passIn.value != rpPasIn.value) {
    rpPasIn.classList.add("is-invalid");
    return;
  }

  form.submit();
});


nameIn.addEventListener("change", function () {
  console.log("isledi")
  if (nameIn.value != "") {
    nameIn.classList.remove("is-invalid");
  } else {
    nameIn.classList.add("isinvalid-");
  }
});

emailIn.addEventListener("blur", function () {
  if (validateEmail(emailIn.value)) {
    emailIn.classList.remove("is-invalid");
  } else {
    emailIn.classList.add("is-invalid");
  }
});

passIn.addEventListener("blur", function () {
  if (validatePass(passIn.value)) {
    passIn.classList.remove("is-invalid");
  } else {
    passIn.classList.add("is-invalid");
  }
});

rpPasIn.addEventListener("blur", function () {
  if (passIn.value != rpPasIn.value) {
    rpPasIn.classList.add("is-invalid");
  } else {
    rpPasIn.classList.remove("is-invalid");
  }
});

function validateEmail(email) {
  if (email == "") {
    return false;
  }

  if (!emailIn.value.includes("@")) {
    return false;
  }

  let parts = email.split("@");
  if (parts.length > 2) {
    return false;
  }

  if (parts[0] == "" || parts[1] == "") {
    return false;
  }

  return true;
}

function validatePass(pass) {
  var regularExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  return regularExpression.test(pass);
}

// let a = document.querySelector("a");
// a.addEventListener("click", function (e) {
//   e.preventDefault();
//   if (confirm("siz xarici sayta getmek isteyirsiz?")) {
//     window.location = a.getAttribute("href");
//   } else {
//     return;
//   }
// });
