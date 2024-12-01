document.getElementById("remove-money-btn").addEventListener("click", function(e){
    e.preventDefault();
    const amount = inputFieldValue("removeMoneyAmouont");
    const pin = inputFieldValue("removeMoneyPin");
    if(isNaN(amount)){
        alert("please provide number");
    }
    if(pin==1234){
        const display = textValue("display");
        if(amount>display){
            alert("you do not have money to cash out");
            return;
        }
        const total=display-amount;
        document.getElementById("display").innerText=total;
        // history
        const div=document.createElement("div");
        div.classList.add("bg-red-200");
        div.innerHTML=`
        <h4 class="text-base">cash out</h4>
        <p>added${amount}TK. Balance${total}; 
        `;
        document.getElementById("transaction-container").appendChild(div);
    }else{
        alert("try again later");
    }

})