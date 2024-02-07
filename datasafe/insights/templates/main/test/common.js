// common.js
function saveFormData(formId) {
    var form = document.getElementById(formId);
    var formData = {};

    // Iterate through form elements
    for (var i = 0; i < form.elements.length; i++) {
        var element = form.elements[i];

        // Check if the element has an ID
        if (element.id) {
            // Save the value to the formData object with the element's ID as the key
            formData[element.id] = element.value;
        }
    }

    // Store the formData in localStorage
    localStorage.setItem(formId, JSON.stringify(formData));
}
