document.getElementById("login-btn").addEventListener("click",function(e){
    e.preventDefault();
    const number = document.getElementById("mobileNumber").value;
    const pin = document.getElementById("4DigitPin").value;
    if(number=="016" && pin=="1234"){
        window.location.href="./home.html";
    }else{
        alert("wrong password");
    }
})