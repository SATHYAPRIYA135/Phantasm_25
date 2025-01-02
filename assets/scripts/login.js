function switchLogin(){
    const box = document.getElementById("box");
    if(box.style.flexDirection == "row-reverse"){
        box.style.flexDirection = "row";
        document.getElementById("login-title").innerHTML = "<p>LOGIN FOR PARTICIPANTS</p>"
        document.getElementById("switch-title").innerHTML = "LOGIN FOR ADMINS"
    }else{
        box.style.flexDirection = "row-reverse";
        document.getElementById("login-title").innerHTML = "<p>LOGIN FOR ADMINS</p>"
        document.getElementById("switch-title").innerHTML = "LOGIN FOR PARTICIPANTS"
    }

}