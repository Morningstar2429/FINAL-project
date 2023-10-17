// Define an array of valid destinations
const validDestinations = [
    "Kashmir",
    "Kerla",
    "Hampi",
    "Maldives",
    "Mumbai",
    "Dubai",
    "Switzerland"
    // Add more destinations as needed
];

// Get references to the form and result elements
const searchForm = document.getElementById("searchForm");
// const destinationInput = document.getElementById("destinationInput");
// const result = document.getElementById("result");

// Add a submit event listener to the form
searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const userInput = searchForm.location.value;
    console.log(userInput);

    // Get the user's input
    // const userInput = destinationInput.value.trim();

    // Check if the input matches a valid destination
    if (validDestinations.includes(userInput)) {
        // If it's a match, open the corresponding HTML page
        window.location.href = userInput.toLowerCase() + ".html";
    } else {
        alert("Destination not found. Please try again.");
        // result.innerHTML = "Destination not found. Please try again.";
    }
});