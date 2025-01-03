function switchLogin(){
    const box = document.getElementById("box");
    if(box.style.flexDirection == "row-reverse"){

        box.style.flexDirection = "row";
        document.getElementById("login-title").innerHTML = "<p>Login For Participants</p>";
        document.getElementById("login").style.borderRadius = "8px 0px 0px 8px";
        document.getElementById("switch-title").innerHTML = "Login For Admins";
        document.getElementById("switch-title").style.rotate = "0deg";
        document.getElementById("switch").style.borderRadius = "0px 8px 8px 0px";

    }else{

        box.style.flexDirection = "row-reverse";
        document.getElementById("login-title").innerHTML = "<p>Login For Admins</p>";
        document.getElementById("login").style.borderRadius = "0px 8px 8px 0px";
        document.getElementById("switch-title").innerHTML = "Login For Participants";
        document.getElementById("switch-title").style.rotate = "180deg";
        document.getElementById("switch").style.borderRadius = "8px 0px 0px 8px";

    }

}