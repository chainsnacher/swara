// Basic client-side validation
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var age = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var gender = document.getElementById("gender").value;
    
    if (name === "" || age === "" || email === "" || password === "" || gender === "") {
      alert("Please fill in all the fields.");
      event.preventDefault();
    }
  });
  