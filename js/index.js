registerStudent = () => {
    let names = document.getElementById("names").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let password = document.getElementById("password").value;
    let subject = document.getElementById("select").value;
    let spam = document.getElementById("Check1").checked;
  
    if (spam) {
      alert("Welcome " + names + "!" + " Thank you for your interest in " + subject + "!" + " We will contact you via the email provided: " + email + ", or alternatively on the phone number: " + number);
    } else {
      alert("Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested " +  names + "!" + " If you want to sign up, you better CHECK that newsletter box!");
    }
};
  