const eyeBtn = document.querySelector(".eye-btn");

const Password = document.getElementById("Password");

const btn_toggle = function(){
    if(Password.type == "password"){
        Password.type = 'text';
        eyeBtn.src = "eye-open.png";
    }
    else{
        Password.type = "password";
        eyeBtn.src = "eye-close.png";
    }
}

eyeBtn.addEventListener("click", btn_toggle);