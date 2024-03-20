
function saveText1(nextPage) {

    // Get the text from the textarea
    const DatasetName = document.getElementById("DatasetName").value;
// Save the text to localStorage (you can use other storage mechanisms)
    localStorage.setItem("DatasetName", DatasetName);
    
    const description = document.getElementById("description").value;
    localStorage.setItem("description", description);

    const motivation = document.getElementById("motivation").value;
    localStorage.setItem("motivation", motivation);

    const accessibilityOption = document.querySelector('input[name="accessibility"]:checked');
    const accessibility = accessibilityOption ? accessibilityOption.value : null;
    localStorage.setItem("accessibility", accessibility);

    const accessibilityInfo = document.getElementById("accessibilityInfoArea").value;
    localStorage.setItem("accessibilityInfo", accessibilityInfo);

    const research = document.getElementById("research").value;
    localStorage.setItem("research", research);

    const authors = document.getElementById("authors").value;
    localStorage.setItem("authors", authors);

    const contributors = document.getElementById("contributors").value;
    localStorage.setItem("contributors", contributors);

    const fundingOption = document.querySelector('input[name="funding"]:checked');
    const funding = fundingOption ? fundingOption.value : null;
    localStorage.setItem("funding", funding);

    const fundingInfo = document.getElementById('fundingInfoArea').value;
    localStorage.setItem("fundingInfo", fundingInfo)

    const combinationOption = document.querySelector('input[name="combination"]:checked');
    const combination = combinationOption ? combinationOption.value : null;
    localStorage.setItem("combination", combination);

    const combinationInfo = document.getElementById('combinationInfoArea').value;
    localStorage.setItem("combinationInfo", combinationInfo)

    const date = document.getElementById("date").value;
    localStorage.setItem("date", date);

    const version = document.getElementById("version").value;
    localStorage.setItem("version", version);

    window.location.href = nextPage;


}

function populateAnswers() {
    const DatasetName = localStorage.getItem("DatasetName") || '';
    document.getElementById("DatasetName").value = DatasetName;

    const description = localStorage.getItem("description") || '';
    document.getElementById("description").value = description;

    const motivation = localStorage.getItem("motivation") || '';
    document.getElementById("motivation").value = motivation;

    const accessibility = localStorage.getItem("accessibility");
    if (accessibility !== null) {
        const  accessibilityOption = document.querySelector('input[name="accessibility"][value="' + accessibility + '"]').checked = true;
        if (accessibilityOption) {
            accessibilityOption.checked = true;
            const accessibilityInfo = localStorage.getItem("accessibilityInfo") || '';
            document.getElementById("accessibilityInfoArea").value = accessibilityInfo;
        } 
    }

    
    const research = localStorage.getItem("research") || '';
    document.getElementById("research").value = research;

    const authors = localStorage.getItem("authors") || '';
    document.getElementById("authors").value = authors;

    const contributors = localStorage.getItem("contributors") || '';
    document.getElementById("contributors").value = contributors;

    const funding = localStorage.getItem("funding");
    if (funding !== null) {
        const fundingOption = document.querySelector('input[name="funding"][value="' + funding + '"]').checked = true;
        if (fundingOption) {
            fundingOption.checked = true;
            const fundingInfo = localStorage.getItem("fundingInfo") || '';
            document.getElementById('fundingInfoArea').value = fundingInfo;

        }
    }

    const combination = localStorage.getItem("combination");
    if (combination !== null) {
        document.querySelector('input[name="combination"][value="' + combination + '"]').checked = true;
    }

    if (combination !== null) {
        combinationOption = document.querySelector('input[name="combination"][value="' + combination + '"]').checked = true;
        if (combinationOption) {
            combinationOption.checked = true;
            const combinationInfo = localStorage.getItem("combinationInfo") || '';
            document.getElementById('combinationInfoArea').value = combinationInfo;

        }
    }

    const date = localStorage.getItem("date") || '';
    document.getElementById("date").value = date;

    const version = localStorage.getItem("version") || '';
    document.getElementById("version").value = version;
}


function saveText2(nextPage) {

    const applications = document.getElementById("applications").value;
    localStorage.setItem("applications", applications);

    const datatypes = document.getElementById("datatypes").value;
    localStorage.setItem("datatypes", datatypes);

    const qorqOption = document.querySelector('input[name="qorq"]:checked');
    const qorq = qorqOption ? qorqOption.value : null;
    localStorage.setItem("qorq", qorq);

    const size = document.getElementById("size").value;
    localStorage.setItem("size", size);

    const personalOption = document.querySelector('input[name="personal"]:checked');
    const personal = personalOption ? personalOption.value : null;
    localStorage.setItem("personal", personal);

    const personalInfo = document.getElementById("personalInfoArea").value;
    localStorage.setItem("personalInfo", personalInfo);

    const flaws = document.getElementById("flaws").value;
    localStorage.setItem("flaws", flaws);

    const splits = document.getElementById("splits").value;
    localStorage.setItem("splits", splits);

    const annotationOption = document.querySelector('input[name="annotation"]:checked');
    const annotation = annotationOption ? annotationOption.value : null;
    localStorage.setItem("annotation", annotation);

    const annotationInfo = document.getElementById("annotationInfoArea").value;
    localStorage.setItem("annotationInfo", annotationInfo);

    const collection = document.getElementById("collection").value;
    localStorage.setItem("collection", collection);

    const format = document.getElementById("format").value;
    localStorage.setItem("format", format);

    const languages = document.getElementById("languages").value;
    localStorage.setItem("languages", languages);

    const doi = document.getElementById("doi").value;
    localStorage.setItem("doi", doi);

    const licence = document.getElementById("licence").value;
    localStorage.setItem("licence", licence);

    const update = document.getElementById("update").value;
    localStorage.setItem("update", update);

    window.location.href = nextPage;

    //populateAnswers();
    //populateAnswers3();

}


function populateAnswers2() {
    const applications = localStorage.getItem("applications");
    document.getElementById("applications").value = applications;


    const datatypes = localStorage.getItem("datatypes");
    document.getElementById("datatypes").value = datatypes;

    const qorq = localStorage.getItem("qorq");
    if (qorq !== null) {
        const qorqOption = document.querySelector('input[name="qorq"][value="' + qorq + '"]');
        if (qorqOption) {
            qorqOption.checked = true;
        }    
    }

    const size = localStorage.getItem("size");
    document.getElementById("size").value = size;

    const personal = localStorage.getItem("personal");
    if (personal !== null) {
        const personalOption = document.querySelector('input[name="personal"][value="' + personal + '"]');
        if (personalOption) {
            personalOption.checked = true;
            const personalInfo = localStorage.getItem("personalInfo");
            document.getElementById("personalInfoArea").value = personalInfo;

        }
        
    }
    
    const flaws = localStorage.getItem("flaws");
    document.getElementById("flaws").value = flaws;

    const splits = localStorage.getItem("splits");
    document.getElementById("splits").value = splits;

    const annotation = localStorage.getItem("annotation");
    if (annotation !== null) {
        const annotationOption = document.querySelector('input[name="annotation"][value="' + annotation + '"]');
        if (annotationOption) {
            annotationOption.checked = true;
            const annotationInfo = localStorage.getItem("annotationInfo");
            document.getElementById("annotationInfoArea").value = annotationInfo;

        }        
        
    }


    const collection = localStorage.getItem("collection");
    document.getElementById("collection").value = collection;

    const format = localStorage.getItem("format");
    document.getElementById("format").value = format;

    const languages = localStorage.getItem("languages");
    const doi = localStorage.getItem("doi");
    const licence = localStorage.getItem("licence");
    const update = localStorage.getItem("update");

    document.getElementById("languages").value = languages;
    document.getElementById("doi").value = doi;
    document.getElementById("licence").value = licence;
    document.getElementById("update").value = update;
}


function saveText3(nextPage) {

    const maintainedOption = document.querySelector('input[name="maintained"]:checked');
    const maintained = maintainedOption ? maintainedOption.value : null;
    localStorage.setItem("maintained", maintained);

    const maintainedInfo = document.getElementById("maintainedInfoArea").value;
    localStorage.setItem("maintainedInfo", maintainedInfo);

    const Uses = document.getElementById("Uses").value;
    localStorage.setItem("Uses", Uses);

    const unsafe = document.getElementById("unsafe").value;
    localStorage.setItem("unsafe", unsafe);

    const bias = document.getElementById("bias").value;
    localStorage.setItem("bias", bias);

    const social = document.getElementById("social").value;
    localStorage.setItem("social", social);

    const cite = document.getElementById("cite").value;
    localStorage.setItem("cite", cite);

    const further = document.getElementById("further").value;
    localStorage.setItem("further", further);

    window.location.href = nextPage;


}

function populateAnswers3() {
    const maintained = localStorage.getItem("maintained");
    if (maintained !== null) {
        const maintainedOption =  document.querySelector('input[name="maintained"][value="' + maintained + '"]');
        if (maintainedOption) {
            maintainedOption.checked = true;
            if (maintained == "Yes"){
                const maintainedInfo = localStorage.getItem("maintainedInfo") || '';
                document.getElementById("maintainedInfoArea").value = maintainedInfo;
            }
        }
    }

    const Uses = localStorage.getItem("Uses") || '';
    document.getElementById("Uses").value = Uses;

    const unsafe = localStorage.getItem("unsafe") || '';
    document.getElementById("unsafe").value = unsafe;

    const bias = localStorage.getItem("bias") || '';
    document.getElementById("bias").value = bias;

    const social = localStorage.getItem("social") || '';
    document.getElementById("social").value = social;

    const cite = localStorage.getItem("cite") || '';
    document.getElementById("cite").value = cite;

    const further = localStorage.getItem("further") || '';
    document.getElementById("further").value = further;
}


function saveTextToModel(nextPageUrl) {
    // Retrieve data from the form
    var formData = {
        'DatasetName': document.getElementById('DatasetName').value,
        'description': document.getElementById('description').value,
        'motivation': document.getElementById('motivation').value,
        'research': document.getElementById('research').value,
        'authors': document.getElementById('authors').value,
        'contributors': document.getElementById('contributors').value,
        'date': document.getElementById('date').value,
        'version': document.getElementById('version').value,
        'accessibility': getSelectedRadioValue('accessibility'),
        'accessibilityInfo': document.getElementById('accessibilityInfoArea').value,
        'funding': getSelectedRadioValue('funding'),
        'fundingInfo': document.getElementById('fundingInfoArea').value,
        'combination': getSelectedRadioValue('combination'),
        'combinationInfo': document.getElementById('combinationInfoArea').value
    
    };

    // Save data to local storage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Check if the user is logged in
    var isLoggedIn = user.is_authenticated;

    if (isLoggedIn) {
        // If logged in, send AJAX request to save data to database
        var csrfToken = document.getElementsByName('csrfmiddlewaretoken')[0].value;
        formData.csrfmiddlewaretoken = csrfToken; // Add CSRF token to data

        fetch('/save_datacard/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken,
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (response.ok) {
                // Data saved successfully, redirect to next page
                window.location.href = nextPageUrl;
            } else {
                // Handle error
                console.error('Error saving data to database');
            }
        })
        .catch(error => {
            console.error('Error saving data to database:', error);
        });
    } else {
        // If not logged in, simply redirect to next page
        window.location.href = nextPageUrl;
    }
}



// Function to gather data from the form and send it to the serve

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    saveDataToServer(); // Call function to save data to the server
}

/** 
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener after the DOM has fully loaded
    var formSet1 = document.getElementById('formSet1');
    if (formSet1) {
        formSet1.addEventListener('submit', handleSubmit);
    }

    // Function to display local storage data
    function displayLocalStorageData(key, targetElementId) {
        var storedData = localStorage.getItem(key);
        var targetElement = document.getElementById(targetElementId);

        if (storedData !== null && targetElement !== null) {
            targetElement.innerHTML = "<p>" + storedData + "</p>";
        } else {
            console.error("Key not found or target element not found:", key, targetElementId);
        }
    }
});
*/

function exitQuestions(nextPageUrl) {
    var confirmation = confirm("Are you sure you want to exit? All progress will be lost.");

    if (confirmation) {
        localStorage.clear();

        window.location.href = nextPageUrl;
    }
}

function displayMultipleKeys(keysArray) {
    keysArray.forEach(function (keyInfo) {
        displayLocalStorageData(keyInfo.key, keyInfo.targetElementId);
    });
}

window.onload = function () {
    const savedEmail = localStorage.getItem('savedEmail');
    const savedPassword = localStorage.getItem('savedPassword');
    const rememberMeCheckbox = document.getElementById('rememberMe');

    if (savedEmail && savedPassword) {
        document.getElementById('email').value = savedEmail;
        document.getElementById('password').value = savedPassword;
        rememberMeCheckbox.checked = true;
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Toggle the menu visibility when clicking the menu icon
 
    // Handle logout when clicking the logout button
    var logoutButton = document.getElementById('logoutButton');

    logoutButton.addEventListener('click', function(event) {
        event.preventDefault();
        console.log("logging out")
        var confirmLogout = confirm("Are you sure you want to log out?");
        if (confirmLogout) {
            // If user confirms logout, redirect to logout URL
            var logoutForm = document.getElementById('logoutForm');
            logoutForm.submit();

        } else {
            // If user cancels logout, do nothing
        }
    });
});

/**
document.addEventListener('DOMContentLoaded', function () {
    function login1() {
        // Get user input
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const rememberMeCheckbox = document.getElementById('remeberMeCheckbox');
        const csrfToken = document.getElementsByName('csrfmiddlewaretoken')[0].value;


        // Check if email and password are not blank
        if (email.trim() === '' || password.trim() === '') {
            alert('Please enter both email and password.');
            return; // Stop execution if fields are blank
        }


        // Check if "Remember Me" is checked

        if (rememberMeCheckbox.checked) {
            // Save credentials to localStorage
            localStorage.setItem('savedEmail', email);
            localStorage.setItem('savedPassword', password);
        } else {
            // Clear saved credentials
            localStorage.removeItem('savedEmail');
            localStorage.removeItem('savedPassword');
        }
        
        fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken,  // Include the CSRF token in the headers
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })            

        .then(response =>{
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Check the response from the server
            if (data.status === 'success') {
                alert('Login successful!');
                window.location.href = "{% url 'home' %}";
            } else {
                alert('Login failed. Please check your credentials');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            console.error('Full Error Object:', error);

            if (error.message && error.message.includes('unregistered email')) {
                alert('This email is not recognized. To register a new account, click the "Register New Account" button.');
            } else {
                alert('An error occurred during login. Please try again.');
            }
        });
    }
    
    window.login = login;


});
 */


function navButton(page){
    console.log("Navigating to:", page);

    window.location.href = page;
}

function continueAsGuest() {
    console.log("Redirecting to home");
    redirect(homeUrl);
    var name = 'Guest'
    localStorage.setItem("user", name);
}

function register() {
    console.log("Redirecting to register");
    redirect(registerUrl);
}

function redirect(element) {
    var url = element.getAttribute('data-url');
    console.log("Redirecting to:", url);
    window.location.href = url;
}

function showExtenstion(display, popupID, placeholder) {

    var additionalElement = document.getElementById(popupID);

    var textarea = additionalElement.querySelector('.popupTextArea');
    textarea.placeholder = placeholder;

    // Display the additional element
    additionalElement.style.display = 'block';

    if (display=='hide'){
        additionalElement.style.display = 'none';
    }

}

function validatePassword() {

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const name = document.getElementById('name').value;

    var hasNumber = /\d/.test(password);
    var validLength = password.length > 7;
    var noBlanks = !(email.trim() === '' && name.trim() === '' && dob.trim() === '');

    if (password === confirmPassword && hasNumber && validLength && noBlanks) {
        //alert('Account successfully created');
        loggedIn = true;
        is_authenticated = true;
        localStorage.setItem("user", JSON.stringify(name));
        //setTimeout(function() {
        //    window.location.href = "/home/";
        //}, 500);
        
    
    } else if (!noBlanks) {
        alert('All fields must be completed to create an account.');
    } else {
        var alertMessage = 'Passwords ';
        alertMessage += (password !== confirmPassword) ? 'do not match. ' : '';
        alertMessage += (!hasNumber) ? 'must contain at least one number. ' : '';
        alertMessage += (!validLength) ? 'must be over 8 characters long. ' : '';
        alert(alertMessage);
    }
}

function toggleEditMode() {
    var bio = document.getElementById('bio');
    var links = document.getElementById('links');
    var name = document.getElementById('name');
    var editButton = document.getElementById('editButton');
    var saveButton = document.getElementById('saveButton');

    if (editButton.textContent === 'Edit Information') {
        // Save the current content as data-* attributes
        bio.setAttribute('data-original-content', bio.textContent);
        links.setAttribute('data-original-content', links.textContent);
        name.setAttribute('data-original-content', name.textContent);

        // Make the content editable
        bio.contentEditable = true;
        links.contentEditable = true;
        name.contentEditable = true;

        // Change the button text
        editButton.textContent = 'Cancel';
        saveButton.style.display = 'block';
    } else {
        // Exit edit mode
        bio.contentEditable = false;
        links.contentEditable = false;
        name.contentEditable = false;

        // Reset content if it was empty
        if (bio.textContent.trim() === '') {
            bio.textContent = bio.getAttribute('data-original-content');
        }
        if (links.textContent.trim() === '') {
            links.textContent = links.getAttribute('data-original-content');
        }
        if (name.textContent.trim() === '') {
            name.textContent = name.getAttribute('data-original-content');
        }

        // Change the button text
        editButton.textContent = 'Edit Information';
        saveButton.style.display = 'none';
    }
}

function saveInfo() {
    var editedBio = document.getElementById('bio').textContent;
    var editedLinks = document.getElementById('links').textContent;
    var editedName = document.getElementById('name').textContent;

    // Save the information to localStorage
    document.getElementById('id_bio').value = editedBio;
    document.getElementById('id_links').value = editedLinks;
    document.getElementById('id_name').value = editedName;

    // Display success message
    alert('Information has been updated successfully');

    document.getElementById('editForm').submit();
}

function saveToAccount() {

    // Retrieve values from local storage
    var datasetName = localStorage.getItem('DatasetName') || '';
    var user = localStorage.getItem('user') || '';

    if(!user){
        alert('You must be signed in to saved items to your account. You can sign in on the homepage or download the data card instead')
        
    }
    if(!datasetName || datasetName == 'N/A'){
        alert('You must assign a name to your data card. Please return to question set one and do so')
        

    }
    else{
        
        
       // Generate a unique identifier
        const identifier = user + '_' + datasetName.replace(/\s/g, '_');

        // Save the identifier in local storage
        localStorage.setItem('currentIdentifier', identifier);

        // Create a new key in local storage using the generated identifier
        var storageKey = 'data_' + identifier;

        // Store information from keysArray under the new key
        var storedData = {};
        for (var i = 0; i < keysArray.length; i++) {
            var item = keysArray[i];
            var element = document.getElementById(item.targetElementId);
            var text = element ? element.innerText : 'null';

            // Store information in local storage
            localStorage.setItem(storageKey + '_' + item.key, text);

            // Store information in the storedData object
            storedData[item.key] = text;
        }
         // Save the card in the user's saved cards list
         var savedCards = JSON.parse(localStorage.getItem('userSavedCards')) || [];
         savedCards.unshift(identifier); // Add the identifier to the beginning of the list
         localStorage.setItem('userSavedCards', JSON.stringify(savedCards));
 
         // Send the saved data to the Django backend using AJAX or a form submission
         // (your existing AJAX code)
 
         // Redirect to the account page
         var url = "/account/";
         window.location.href = url;
    }
}
