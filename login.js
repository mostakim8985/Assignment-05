document.getElementById('loginBtn').addEventListener('click', () =>{
    const userName = document.getElementById('userName').value;
    const pass = document.getElementById('password').value;

    if (userName != 'admin' || pass != 'admin123') {
        alert('invalid Username');
    }
    
    
    else {
        alert('Login Successful')
        window.location.assign("homepage.html")
    }
})