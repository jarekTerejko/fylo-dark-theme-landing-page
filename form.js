const form = document.querySelector(".sign-up__form");
const mail = document.querySelector(".sign-up__email");
const msgContainer = document.querySelector(".sign-up__message");

const isMailValid = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

const setInputError = (input) => {
  input.classList.add("sign-up__email--error");
  input.classList.remove("sign-up__email--success");
};

const setInputSuccess = (input) => {
  input.classList.add("sign-up__email--success");
  input.classList.remove("sign-up__email--error");
};

const setErrorMsg = (msg) => {
  msgContainer.textContent = msg;
};

const removeErrorMsg = () => {
  msgContainer.textContent = "";
};

const checkInput = () => {
  const emailValue = mail.value.trim();

  if (emailValue === "") {
    setInputError(mail);
    setErrorMsg("This field is required");
  } else if (!isMailValid(emailValue)) {
    setErrorMsg("Please use a valid email address");
    setInputError(mail);
  } else {
    setInputSuccess(mail);
    removeErrorMsg();
  }
};

form.addEventListener("submit", (e) => {
  checkInput();
  e.preventDefault();
});
