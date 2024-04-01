
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

    var today = new Date();

    // Extract day, month, and year
    var day = today.getDate(); // Returns the day of the month (1-31)
    var month = today.getMonth() + 1; // Returns the month (0-11), so add 1 to get the correct month
    var year = today.getFullYear(); // Returns the year (4 digits)
    
    // Format the date as dd/mm/yyyy
    var formattedDate = (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + year;
    localStorage.setItem("date_created", formattedDate)

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

    var today = new Date();

    // Extract day, month, and year
    var day = today.getDate(); // Returns the day of the month (1-31)
    var month = today.getMonth() + 1; // Returns the month (0-11), so add 1 to get the correct month
    var year = today.getFullYear(); // Returns the year (4 digits)
    
    // Format the date as dd/mm/yyyy
    var formattedDate = (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + year;
    localStorage.setItem("date_created", formattedDate)

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

    var today = new Date();

    // Extract day, month, and year
    var day = today.getDate(); // Returns the day of the month (1-31)
    var month = today.getMonth() + 1; // Returns the month (0-11), so add 1 to get the correct month
    var year = today.getFullYear(); // Returns the year (4 digits)
    
    // Format the date as dd/mm/yyyy
    var formattedDate = (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + year;
    localStorage.setItem("date_created", formattedDate)
    
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

/**
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


 */
// Function to gather data from the form and send it to the serve

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    saveDataToServer(); // Call function to save data to the server
}

function displayLocalStorageData(key, targetElementId) {
    var storedData = localStorage.getItem(key);
    var targetElement = document.getElementById(targetElementId);

    if (storedData !== null && targetElement !== null) {
        targetElement.innerHTML = "<p>" + storedData + "</p>";
    } else {
        console.error("Key not found or target element not found:", key, targetElementId);
    }
}


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

function reset_password() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
/**
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "{% url 'reset_password' %}", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.status === 'error') {
                    alert(response.message);
                } else {
                    window.location.href = "{% url 'login' %}";
                }
            } else {
                console.log('Error:', xhr.statusText);
            }
        }
    };
    var data = JSON.stringify({ email: email, password: password, password2: password2 });
    xhr.send(data);
     */
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
    document.getElementById('bio').value = editedBio;
    document.getElementById('links').value = editedLinks;
    document.getElementById('name').value = editedName;

    // Display success message
    alert('Information has been updated successfully');

    document.getElementById('editForm').submit();
}

function saveToAccount(nextPageUrl) {

    console.log("savetoaccount clicked")
    // Retrieve values from local storage
    var datasetName = localStorage.getItem('DatasetName') || '';
    

    if (!datasetName.trim()) {
        alert('You must assign a name to your data card.');
        return;
    }

    // Construct the data object
    var data = {
        dataset_name: datasetName,
        description: localStorage.getItem('description') || '',
        motivation: localStorage.getItem('motivation') || '',
        dataset_accessibility: localStorage.getItem('accessibility') || '',
        accessibility_info: localStorage.getItem('accessibilityInfo') || '',
        date_created: localStorage.getItem('date_created') || '',
        research_motivation: localStorage.getItem('research') || '',
        authors: localStorage.getItem('authors') || '',
        contributors: localStorage.getItem('contributors') || '',
        funding_type: localStorage.getItem('funding') || '',
        funding_info: localStorage.getItem('fundingInfo') || '',
        is_combination: localStorage.getItem('combination') === 'yes',
        combination_info: localStorage.getItem('combinationInfoArea') || '',
        date_created: new Date(), // Set the current date
        version: localStorage.getItem('version') || '',
        applications: localStorage.getItem('applications') || '',
        datatypes: localStorage.getItem('datatypes') || '',
        primary_data: localStorage.getItem('qorq') || '',
        annotation_method: localStorage.getItem('annotation') || '',
        annotation_info: localStorage.getItem('annotationInfoArea') || '',
        collection: localStorage.getItem('collection') || '',
        size: localStorage.getItem('size') || '',
        personal_data: localStorage.getItem('personal') || '',
        flaws: localStorage.getItem('flaws') || '',
        data_splits: localStorage.getItem('splits') || '',
        dataset_format: localStorage.getItem('format') || '',
        languages: localStorage.getItem('languages') || '',
        doi: localStorage.getItem('doi') || '',
        licence: localStorage.getItem('licence') || '',
        last_update: localStorage.getItem('update') ? new Date(localStorage.getItem('update')) : null,
        is_maintained: localStorage.getItem('maintained') === 'Yes',
        maintenance_info: localStorage.getItem('maintainedInfo') || '',
        possible_uses: localStorage.getItem('Uses') || '',
        unsafe_applications: localStorage.getItem('unsafe') || '',
        bias_problems: localStorage.getItem('bias') || '',
        social_impact: localStorage.getItem('social') || '',
        dataset_citation: localStorage.getItem('cite') || '',
        additional_information: localStorage.getItem('further') || ''
    };

    var csrfToken = document.querySelector('input[name="csrfmiddlewaretoken"]').value;

    // Send the data to the backend using AJAX
    $.ajax({
        url: '/save_datacard/', // URL to your Django view for saving datacards
        method: 'POST',
        headers: {
            'X-CSRFToken': csrfToken
        },
        data: data,
        success: function(response) {
            // Redirect to the account page
            console.log("redirecting aaaaaaaaaaaaaaa")
            window.location.href = "/account/";
            
        },
        error: function(xhr, status, error) {
            console.error(error);
            alert('An error occurred while saving the data card.');
        }
    });

    console.log("data saved and request sent")

    localStorage.clear();

}

document.getElementById('saveBtn').addEventListener('click', saveToAccount);

function saveDatacardToLocalStorage(identifier, nextPage) {
    const datacard = {
        identifier: identifier,
        // Populate other fields of the datacard object using the relevant data from your Django model
        dataset_name: "{{ datacard.dataset_name }}",
        description: "{{ datacard.description }}",
        motivation: "{{ datacard.motivation }}",
        dataset_accessibility: "{{ datacard.dataset_accessibility }}",
        accessibility_info: "{{ datacard.accessibility_info }}",
        research_motivation: "{{ datacard.research_motivation }}",
        authors: "{{ datacard.authors }}",
        contributors: "{{ datacard.contributors }}",
        funding_type: "{{ datacard.funding_type }}",
        funding_info: "{{ datacard.funding_info }}",
        is_combination: "{{ datacard.is_combination }}",
        combination_info: "{{ datacard.combination_info }}",
        date_created: "{{ datacard.date_created }}",
        version: "{{ datacard.version }}",
        applications: "{{ datacard.applications }}",
        datatypes: "{{ datacard.datatypes }}",
        primary_data: "{{ datacard.primary_data }}",
        annotation_method: "{{ datacard.annotation_method }}",
        annotation_info: "{{ datacard.annotation_info }}",
        collection: "{{ datacard.collection }}",
        size: "{{ datacard.size }}",
        personal_data: "{{ datacard.personal_data }}",
        flaws: "{{ datacard.flaws }}",
        data_splits: "{{ datacard.data_splits }}",
        dataset_format: "{{ datacard.dataset_format }}",
        languages: "{{ datacard.languages }}",
        doi: "{{ datacard.doi }}",
        licence: "{{ datacard.licence }}",
        last_update: "{{ datacard.last_update }}",
        is_maintained: "{{ datacard.is_maintained }}",
        maintenance_info: "{{ datacard.maintenance_info }}",
        possible_uses: "{{ datacard.possible_uses }}",
        unsafe_applications: "{{ datacard.unsafe_applications }}",
        bias_problems: "{{ datacard.bias_problems }}",
        social_impact: "{{ datacard.social_impact }}",
        dataset_citation: "{{ datacard.dataset_citation }}",
        additional_information: "{{ datacard.additional_information }}",
    };

    // Save the data from the datacard object to local storage
    for (const key in datacard) {
        localStorage.setItem(key, datacard[key]);
    }

    // Redirect the user to the next page
    window.location.href = nextPage;
}


function saveDataCard(identifier) {
    console.log("datacard saving to localstorage")
    // Send AJAX request to retrieve data card information based on the identifier
    $.ajax({
        url: '/get_datacard/',  // URL to retrieve data card information
        type: 'GET',
        data: {
            'identifier': identifier  // Pass the identifier as a parameter
        },
        success: function(data) {
            // Save the retrieved data to local storage
            localStorage.setItem("DatasetName", data['DatasetName']);
            localStorage.setItem("description", data['description']);
            localStorage.setItem("motivation", data['motivation']);
            localStorage.setItem("date_created", data['date_created']);
            localStorage.setItem("accessibility", data['dataset_accessibility']);
            localStorage.setItem("accessibilityInfo", data['accessibility_info']);
            localStorage.setItem("research", data['research_motivation']);
            localStorage.setItem("authors", data['authors']);
            localStorage.setItem("contributors", data['contributors']);
            localStorage.setItem("funding", data['funding_type']);
            localStorage.setItem("fundingInfo", data['funding_info']);
            localStorage.setItem("combination", data['is_combination']);
            localStorage.setItem("combinationInfo", data['combination_info']);
            localStorage.setItem("date", data['date_created']);
            localStorage.setItem("version", data['version']);
            localStorage.setItem("applications", data['applications']);
            localStorage.setItem("datatypes", data['datatypes']);
            localStorage.setItem("qorq", data['primary_data']);
            localStorage.setItem("size", data['size']);
            localStorage.setItem("personal", data['personal_data']);
            localStorage.setItem("personalInfo", data['personal_data']);
            localStorage.setItem("flaws", data['flaws']);
            localStorage.setItem("splits", data['data_splits']);
            localStorage.setItem("annotation", data['annotation_method']);
            localStorage.setItem("annotationInfo", data['annotation_info']);
            localStorage.setItem("collection", data['collection']);
            localStorage.setItem("format", data['dataset_format']);
            localStorage.setItem("languages", data['languages']);
            localStorage.setItem("doi", data['doi']);
            localStorage.setItem("licence", data['licence']);
            localStorage.setItem("update", data['last_update']);
            localStorage.setItem("maintained", data['is_maintained']);
            localStorage.setItem("maintainedInfo", data['maintenance_info']);
            localStorage.setItem("Uses", data['possible_uses']);
            localStorage.setItem("unsafe", data['unsafe_applications']);
            localStorage.setItem("bias", data['bias_problems']);
            localStorage.setItem("social", data['social_impact']);
            localStorage.setItem("cite", data['dataset_citation']);
            localStorage.setItem("further", data['additional_information']);
        

            // Redirect to complete.html
            window.location.href = '/complete/';
        },
        error: function(xhr, status, error) {
            // Handle errors
            console.error(error);
        }
    });
}