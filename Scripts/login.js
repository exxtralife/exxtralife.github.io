

function check_login(username, password)
{
    if(username == "eden" && password == "eden")
    {
        return true;
    }
    else
    {
        return false;
    }
}

const form = document.getElementById('loginForm');

    form.addEventListener('submit', (event) => {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(check_login(username, password))
    {
        window.location.href = 'Desktop/Desktop.html';
    }

    else
    {
        alert('incorrect login');
    }
  });