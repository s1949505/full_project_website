// presentation.js
document.addEventListener("DOMContentLoaded", function () {
    // Container to display answers
    var presentationContainer = document.getElementById("presentationContainer");

    // Iterate through stored form data in localStorage
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);

        // Check if the key is a form ID (e.g., "formPage1", "formPage2", "formPage3")
        if (key && key.startsWith("formPage")) {
            var formData = JSON.parse(localStorage.getItem(key));

            // Display form data on the presentation page
            var formDiv = document.createElement("div");
            formDiv.innerHTML = "<h2>" + key + "</h2>";

            for (var prop in formData) {
                if (formData.hasOwnProperty(prop)) {
                    var paragraph = document.createElement("p");
                    paragraph.textContent = prop + ": " + formData[prop];
                    formDiv.appendChild(paragraph);
                }
            }

            presentationContainer.appendChild(formDiv);
        }
    }
});
