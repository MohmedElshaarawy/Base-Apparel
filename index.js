let form = document.querySelector("#form");
let email = document.querySelector(".email");
let mainPage = document.querySelector(".main-page");

form.addEventListener("submit", (e) => { e.preventDefault();
  let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (regEx.test(email.value)) {
    mainPage.classList.add("hide");
    document.getElementById("confirmation-container").removeAttribute("hidden");
  } else {
  }
  document.getElementById("error-message").style.display = "block"
});