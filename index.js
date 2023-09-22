// Sample JavaScript code

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form data
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    // Perform basic validation
    if (password !== confirmPassword) {
        alert('Password and confirm password do not match');
        return;
    }

    // Create an object to hold the form data
    const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
    };

    // You can now send this formData object to your server for further processing
    // For example, you can use the fetch API to make an HTTP POST request to your server.

    // Example:
    // fetch('/your-server-endpoint', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    // })
    // .then(response => response.json())
    // .then(data => {
    //     // Handle the response from the server
    // })
    // .catch(error => {
    //     console.error('Error
