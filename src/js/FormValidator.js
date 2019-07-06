export default class FormValidator {
  get SELECTORS() {
    return {
      main: '[data-form-validation="true"]',
      submitBtn: 'button[type="submit"]'
    };
  }
  constructor() {
    this.checkValidsClass = "check-validation";
  }
  checkInputs(form) {
    let inputs = form.querySelectorAll("input");
    console.log(inputs);
  }
  trimInputs(form) {
    let inputs = form.querySelectorAll("input:required");
    console.log(inputs);
    for (let input of inputs) {
      input.addEventListener("focusout", () => {
        console.log("-" + input.value + "-");
        input.value = input.value.trim();
        console.log("-" + input.value + "-after");
      });
    }
  }
  checkValids(form) {
    let submitBtn = form.querySelector(this.SELECTORS.submitBtn);

    submitBtn.addEventListener("click", () => {
      console.log(form);
      if (form.checkValidity()) {
        console.log("valid");
      } else {
        console.error("invalid inputs");
        form.classList.add(this.checkValidsClass);
      }
    });
  }
  init() {
    console.log("Form Validator ignited");
    let allForms = document.querySelectorAll(this.SELECTORS.main);
    for (let form of allForms) {
      this.checkInputs(form);
      this.trimInputs(form);
      this.checkValids(form);
    }
  }
}
