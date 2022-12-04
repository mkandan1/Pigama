function AdminLoginFun(){
    console.log('Clicked');
    const admin_email = document.getElementById('email').value;
    const admin_password = document.getElementById('pass').value;

    const adminCredentials = {admin_email: admin_email, admin_password: admin_password}

    fetch('/admin/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(adminCredentials)
    })
    .then((response)=> response.json())
    .then((data)=> {
        console.log('Logged In!');
    })
    .catch((error)=>{
        const errorData = JSON.parse(error)
        console.log(errorData.error_message);
    })
  }
  export default AdminLoginFun