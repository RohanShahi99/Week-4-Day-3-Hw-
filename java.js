
function toggleContactMethod() {
    var contactMethod = document.getElementById("contactMethod").value;
    var emailInput = document.getElementById("emailInput");
    var phoneInput = document.getElementById("phoneInput");

    // Hide both fields initially
    emailInput.style.display = "none";
    phoneInput.style.display = "none";

    // Show the corresponding field based on selection
    if (contactMethod === "email") {
        emailInput.style.display = "block";
    } else if (contactMethod === "phone") {
        phoneInput.style.display = "block";
    }
}
