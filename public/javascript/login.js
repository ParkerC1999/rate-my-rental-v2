async function signupFormHandler(event) {
   event.preventDefault();

   const first_name = document.querySelector("#firstname-signup").value.trim();
   const last_name = document.querySelector("#lastname-signup").value.trim();
   const email = document.querySelector('#email-signup').value.trim();
   const password = document.querySelector('#password-signup').value.trim();
   const username = document.querySelector('#username-signup').value.trim();

   if (first_name && last_name && email && password && username) {
      const response = await fetch('/api/tenants', {
         method: 'post',
         body: JSON.stringify({
            first_name,
            last_name,
            email,
            username,
            password
         }),
         headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
         //alert('account created');
         // check to make sure replace works
         document.location.replace('/');
      } else {
         alert(response.statusText);
         // response.json().then(function (data) {
         //    console.log(data);
         //    switch (data[0].path) {
         //       case 'password':
         //          $('#password-req').append('<p>Password does not meet password strength criteria</p>').addClass('mt-1 mb-0 text-danger');
         //          //alert ('Password validation failed');
         //          break;
         //       case 'username':
         //          $('#username-div').append('<p>Username too short</p>').addClass('mt-1 mb-0 text-danger');
         //          //alert ('Username too short');
         //          break;
         //       case 'email':
         //          $('#email-div').append('<p>Not a valid email address</p>').addClass('mt-1 mb-0 text-danger');
         //          //alert ('Not a valid email address');
         //          break;
         //       case 'user.username':
         //          $('#username-div').append('<p>Not a unique username</p>').addClass('mt-1 mb-0 text-danger');
         //          break;
         //       case 'user.email':
         //          $('#email-div').append('<p>Email already in use</p>').addClass('mt-1 mb-0 text-danger');
         //          break;
         //    }
         // });
      }
   } // else {

   //    $('#password-req').append('<p>Please fill out all text fields before continuing.</p>').addClass('mt-1 mb-0 text-danger');
   //    //alert('Please fill out all text fields before continuing.');

   //    return;
   // }
}

var firstTry = true;
async function loginFormHandler(event) {
   event.preventDefault();

   const email = $('#email-login').val().trim();
   const password = $('#password-login').val().trim();

   if (email && password) {
      const response = await fetch('/api/users/login', {
         method: 'post',
         body: JSON.stringify({
            username,
            password
         }),
         headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
         // check to make sure replace works
         document.location.replace('/');
      } else {
         alert(response.statusText);
         // if (response.status === 404 && firstTry === true) {
         //    $('#password-div').append('<p>Invalid password or username</p>').addClass('mt-1 mb-0 text-danger');
         //    firstTry = false;
         // } else {
         //    $('p').remove(":contains('Invalid password or username')");
         //    $('#password-div').append('<p>Invalid password or username</p>').addClass('mt-1 mb-0 text-danger');
         // }
      }
   }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);