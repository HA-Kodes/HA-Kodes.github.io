// Get the button element
const thumbsUpButton = document.getElementById('thumbsUpButton');

// Add an event listener to the button
thumbsUpButton.addEventListener('click', function() {
    // Display a message when the button is clicked
    alert('Thank you for the thumbs up!');
    // Increment the counter value
    incrementCounter();
});

function incrementCounter() {
    // Get the counter element
    const counter = document.getElementById('counterValue');
    // Get the current counter value
    let currentValue = parseInt(counter.innerText);
    // Increment the counter value
    currentValue += 1;
    // Update the counter element with the new value
    counter.innerText = currentValue;
}
