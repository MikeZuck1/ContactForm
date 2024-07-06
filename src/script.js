document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi réel du fonrmulaire.
    document.getElementById('submitMessage').style.display = 'block'; 

    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    let emailAddress = document.getElementById('email');
    let message = document.getElementById('message');
    let checkbox = document.getElementById('square-checkbox');
    let enquiryInput = document.getElementById('enquiry')
    let requestInput = document.getElementById('request');

    // THIS CONDITION ANALYZE IF ALL FIELDS ARE EMPTY OR NOT. 
    // IF THE ONE (OR SOME) FIELD(S) IS/ARE EMPTY, THEN A ALERT WILL APPEAR.
    // .VALUE IS A PROPRETY WHO GET 

    if (firstName.value == "") {
        alert('Please enter the first name !'); 
    } else if (lastName.value == "") {
        alert('Please enter the last name !');
    } else if (emailAddress.value == "") {
        alert('Please enter the email address'); 
    } else if (message.value == "") {
        alert('Please enter the message'); 
    } else if (checkbox.checked == "") { 
        alert('Please enter our consent');
    } else if (enquiryInput.checked == "") {
        alert ('Please selecction one of the optional Query Type');
    } else if (requestInput.checked == "") {
        alert ('Please selecction one of the optional Query Type'); 
    } else {
        alert('This form has been successfully submitted !');
        console.log(`
            This form has a username of ${firstName.value} - ${lastName.value} and email ${emailAddress.value}
        `);

        username.value = ""; 
        password.value = ""; 
    }
});