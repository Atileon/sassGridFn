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
    // console.log(inputs);
    for (let input of inputs) {
      input.addEventListener("blur", () => {
        console.log("-" + input.value + "-");
        input.value = input.value.trim();
        console.log("-" + input.value + "-after");
      });
    }
  }
  ajaxCall(form) {
    let url = "/";
    let data = new FormData(form);
    fetch(url, {
      method: "post",
      body: data
    }).then(resp => {
      resp.text().then(function(txt) {
        console.log(txt);
      });
    });
  }
  checkValids(form) {
    let submitBtn = form.querySelector(this.SELECTORS.submitBtn);

    submitBtn.addEventListener("click", e => {
      if (form.checkValidity()) {
        console.log("valid");
        e.preventDefault();
        this.ajaxCall(form);
      } else {
        console.error("invalid inputs");
        form.classList.add(this.checkValidsClass);
      }
    });
  }
  setPatterns(){
      
  }
  render() {
    console.log("Form Validator ignited");
    let allForms = document.querySelectorAll(this.SELECTORS.main);
    for (let form of allForms) {
      this.checkInputs(form);
      this.trimInputs(form);
      this.checkValids(form);
    }
  }
  init() {
    if (document.querySelector(this.SELECTORS.main)) {
      this.render();
    }
  }
}
