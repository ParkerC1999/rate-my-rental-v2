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

         // document.location.replace('/');
      } else {
         alert(response.statusText);
      }
   } 
}

var firstTry = true;
async function loginFormHandler(event) {
   event.preventDefault();

   const email = document.querySelector('#email-login').value.trim();
   const password = document.querySelector('#password-login').value.trim();

   if (email && password) {
      const response = await fetch('/api/tenants/login', {
         method: 'post',
         body: JSON.stringify({
            email,
            password
         }),
         headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
         document.location.replace('/');
      } else {
         alert(response.statusText);
      }
   }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);