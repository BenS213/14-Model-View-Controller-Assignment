document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();


    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password,
                username
            }),
            headers: { 'content-Type': 'application/json' }
        });

    
    if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
}