registerStudent = () => {
    let names = document.getElementById("names").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let password = document.getElementById("password").value;
    let subject = document.getElementById("select").value;
    let spam = document.getElementById("Check1").checked;
  
    console.log(names, email, number, password, subject, spam);
}
  