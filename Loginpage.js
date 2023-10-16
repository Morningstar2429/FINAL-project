document.getElementById("signup-button").addEventListener("click", function () {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Perform validation with stored details (mocked)
    if (validateUser(fname,lname, email, password)) {
        // openPopup("Sign up successful!");
        window.location.href="index.html";
        alert("Success");
    } else {
        alert("Invalid user details. Please try again.");
    }
});

// Mocked user validation function (replace this with your server-side logic)
function validateUser(fname, lname, email, password) {
    // Mocked stored user details
    const storedUser = {
        fname: "Mahant",
        lname: "Deshmukh",
        email: "mahantdeshmukh@gmail.com",
        password: "123",
        fname: "Sahil",
        lname: "Davkhar",
        email: "sahildavkhar@gmail.com",
        password: "1234",
    };

    // Check if the provided details match the stored details
    if (fname === storedUser.fname && lname === storedUser.lname && email === storedUser.email && password === storedUser.password) {
        return true;
    }

    return false;
}