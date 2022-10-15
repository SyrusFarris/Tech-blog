async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username_signup').value.trim();
    const password = document.quesrySelector('#password_signup').value.trim();

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log('Welcome! :D');
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup_form').addEventListener('submit', signupFormHandler);