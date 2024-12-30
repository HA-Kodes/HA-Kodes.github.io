// Load count from local storage or set to 0
let count = localStorage.getItem('clickCount') || 0;

// Get elements
const thumbsUpButton = document.getElementById('thumbsUpButton');
const counterDisplay = document.getElementById('counterValue');

// Update counter display
counterDisplay.innerText = count;

// Ensure button text is updated on page load (if needed)
thumbsUpButton.textContent = `Thumbs Up! Count: ${count}`; 

// Add click event listener to button
thumbsUpButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent any default action
    incrementCounter();
    displayRandomMessage();
});

function incrementCounter() {
    // Increment the counter value
    count += 1;

    // Update the counter element with the new value
    counterDisplay.innerText = count;

    // Save count to local storage
    localStorage.setItem('clickCount', count);

    // Optional: Update button text with new count
    thumbsUpButton.textContent = `Thumbs Up! Count: ${count}`;
}

function displayRandomMessage() {
    // Array of fun messages
    const messages = [
        'Thanks for the 👍!',
        'Happy Coding!',
        'Come Again!',
        'Let\'s Connect!',
        'Awesome!',
        'Enjoy Your Day!',
        'Keep It Up!',
        'You Rock!',
        'Great Job!',
        'Way to Go!',
        'Fantastic!',
        'YAY - You Did It!'
    ];

    // Select a random message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // Show alert with the random message
    alert(randomMessage);
}



// // Get the button element
// const thumbsUpButton = document.getElementById('thumbsUpButton');

// // Add an event listener to the button
// thumbsUpButton.addEventListener('click', function() {
//     // Display a message when the button is clicked
//     alert('Thank you for the thumbs up!');
//     // Increment the counter value
//     incrementCounter();
// });

// function incrementCounter() {
//     // Get the counter element
//     const counter = document.getElementById('counterValue');
//     // Get the current counter value
//     let currentValue = parseInt(counter.innerText);
//     // Increment the counter value
//     currentValue += 1;
//     // Update the counter element with the new value
//     counter.innerText = currentValue;
// }
