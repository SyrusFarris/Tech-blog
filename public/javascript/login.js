async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username_login').value.trim();
    const password = document.querySelector('#password_ogin').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
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
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login_form').addEventListener('submit', loginFormHandler);