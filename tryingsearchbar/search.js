// Predefined stored values for matching
const storedSearchValues = [
    { search: "Paris", departure: "2023-10-20", arrival: "2023-10-25", guests: 2 },
    // Add more stored search values here
];

// Get form
const searchForm = document.getElementById('search-form');

// Store and retrieve search values in local storage
searchForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values
    const search = document.getElementById('search-bar').value;
    const departure = document.getElementById('departure-date').value;
    const arrival = document.getElementById('arrival-date').value;
    const guests = document.getElementById('guests').value;

    // Check if the search values match any predefined stored values
    const isMatch = storedSearchValues.some((storedValue) => {
        return (
            storedValue.search === search &&
            storedValue.departure === departure &&
            storedValue.arrival === arrival &&
            storedValue.guests == guests
        );
    });

    if (isMatch) {
        // Create a new HTML page with the search results
        const newPage = window.open('matched_search.html', '_blank');

        // Build the content for the new page (you can customize it)
        const content = `
            <html>
            <head>
                <title>Search Results</title>
            </head>
            <body>
                <h1>Search Results</h1>
                <p>Search: ${search}</p>
                <p>Departure Date: ${departure}</p>
                <p>Arrival Date: ${arrival}</p>
                <p>Guests: ${guests}</p>
                <!-- Include additional content or styling here -->
            </body>
            </html>
        `;

        newPage.document.open();
        newPage.document.write(content);
        newPage.document.close();
    } else {
        alert('Search does not match any stored values.');
    }
});