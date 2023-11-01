
const formElem = document.querySelector('.login-form');

formElem.addEventListener('submit', onFormElemSubmit);

function onFormElemSubmit(event) {
    event.preventDefault();

    const emailInput = formElem.elements.email.value;
    const passwordInput = formElem.elements.password.value;

    console.log(emailInput);
    console.log(passwordInput);


    const result = { emailInput, passwordInput };
  
    if (emailInput = "" || passwordInput = "") {
      alert ("");
    } else {
      const formInput = {
        emailInput: emailInput;
        passwordInput: passwordInput;
      }
      console.log(formInput);
    }
    formElem.reset();
  }

       // const username = event.target.elements.username.value;

    // const subscription = event.target.elements.subscription.value;
    // const spam1 = event.target.elements.spam1;
    // const spam2 = event.target.elements.spam2;
    // const spam3 = event.target.elements.spam3;

     // if (spam2.checked) {
    //   result.spam2 = spam2.value;
    // }
    // if (spam3.checked) {
    //   result.spam3 = spam3.value;
    // }