window.onload= function(){
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const eno = document.getElementById('eno');
    const pass = document.getElementById('pass');
    const conf_pass= document.getElementById('conf_pass');
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        formValidation();
    })
}
function formValidation(){
    //get values from the input fields
    const usernameValue = username.value.trim();
    const enoValue = eno.value.trim();
    const passValue = pass.value.trim();
    const conf_passValue = conf_pass.value.trim();
    // check if the uername is empty
    if(usernameValue===''){
        //show error & add error class
        setError(username,'username cannot be empty');
    }else{
        //add success class
        setPassed(username);

    }
    // check if the enrollment number is empty or not.
    if(enoValue===''){
        //show error & add error class
        setError(eno,'Enrollment Number cannot be empty');
    }else{
        //add success class
        setPassed(eno);
    }
    // check if the password is empty or not.
    if(passValue===''){
        //show error & add error class
        setError(pass,'Password cannot be empty');
    }else{
        //add success class
        setPassed(pass);
    }
    // check if the enrollment number is empty or not.
    if(conf_passValue===''){
        //show error & add error class
        setError(conf_pass,'This field cannot be empty');
    }else if(conf_passValue!==passValue){
        setError(conf_pass,'Passwords donot match');
    }else{
        //add success class
        setPassed(conf_pass);
    }
    if(setPassed(username)&&setPassed(eno)&&setPassed(conf_pass))
    {   
        let formData = {};
        formData['username'] = usernameValue;
        formData['eno'] = enoValue;
        formData['pass'] = conf_passValue;
        console.log(formData);
    }
}
function setError(input,message){
    const formControl = input.parentElement // form-control
    const small = formControl.querySelector('small');
    small.innerHTML = message;
    //add error class
    formControl.className = 'form-control error';
}
function setPassed(input){
    const formControl = input.parentElement;
    // add the success class name
    formControl.className = 'form-control success';
    return true;
}