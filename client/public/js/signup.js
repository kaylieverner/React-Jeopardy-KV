/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $('form.signup');
  var emailInput = $('input#email-input');
  var passwordInput = $('input#password-input');
  var userName = $('input#inputUserName');
 

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on('submit', function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      userName: userName.val().trim(),
    };
    console.log(userData);

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, userData.userName);
    emailInput.val('');
    passwordInput.val('');
    userName.val('');
   
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, userName) {
    $.post('/api/signupuser', {
      email: email,
      password: password,
      userName: userName,
    })
      .then(function(data) {
        console.log(data);
        window.location.replace('/login');
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $('#alert .msg').text(err.responseJSON);
    $('#alert').fadeIn(500);
  }
});