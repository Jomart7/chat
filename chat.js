document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); 

    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    const correctUsername = 'Jomart';
    const correctPassword = 'qwer1234';

    if (username === correctUsername && password === correctPassword) {
        
        window.location.href = 'welcome.html'; 
    } else {
        document.getElementById('error-message').innerText = 'Invalid username or password';
    }
});






















