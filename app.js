// This function handles the sign-up form submission
function handleSignup(event) {
  event.preventDefault(); // Prevents the page from refreshing

  // Get the form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // Check if the passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return; // Stops the form submission
  }

  // Optionally, validate the form here before redirecting
  if (name && email && password) {
    console.log('User Signed Up:', { name, email, password });

    // Redirect to the notes page
    window.location.href = "notes.html"; // Make sure this path is correct
  } else {
    alert('Please fill in all fields!');
  }
}

