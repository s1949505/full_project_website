// index.js
function saveValues() {
    // Get the form element
    var myForm = document.getElementById("myForm");

    // Initialize an object to store values dynamically
    var values = {};

    // Iterate through all the form elements
    for (var i = 0; i < myForm.elements.length; i++) {
        var element = myForm.elements[i];

        // Check if the element is a textarea
        if (element.tagName.toLowerCase() === "textarea") {
            // Save the value to the 'values' object with the element's ID as the key
            values[element.id] = element.value;
        }
    }

    // Store the values in localStorage
    localStorage.setItem("savedValues", JSON.stringify(values));

    // Redirect to the other page
    window.location.href = "display.html";
}

// display.js
document.addEventListener("DOMContentLoaded", function () {
    // Retrieve values from localStorage
    var savedValues = localStorage.getItem("savedValues");

    // Parse the JSON string to an object
    var values = savedValues ? JSON.parse(savedValues) : {};

    // Display the values in the displayContainer
    var displayContainer = document.getElementById("displayContainer");

    for (var key in values) {
        if (values.hasOwnProperty(key)) {
            var paragraph = document.createElement("p");
            paragraph.textContent = key + ": " + values[key];
            displayContainer.appendChild(paragraph);
        }
    }
});

